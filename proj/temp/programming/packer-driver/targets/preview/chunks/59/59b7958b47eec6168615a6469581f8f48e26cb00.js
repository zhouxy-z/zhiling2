System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DEBUG, EDITOR, assert, clamp, geometry, gfx, Layers, Material, pipeline, renderer, rendering, sys, Vec2, Vec3, Vec4, cclegacy, PipelineEventType, warn, makePipelineSettings, PipelineConfigs, CameraConfigs, _crd, AABB, Sphere, intersect, ClearFlagBit, Color, Format, FormatFeatureBit, LoadOp, StoreOp, TextureType, Viewport, scene, CameraUsage, CSMLevel, LightType, defaultSettings, QueueHint, SceneFlags, ResourceFlags, ResourceResidency;

  function forwardNeedClearColor(camera) {
    return !!(camera.clearFlag & (ClearFlagBit.COLOR | ClearFlagBit.STENCIL << 1));
  }

  function getCsmMainLightViewport(light, w, h, level, vp, screenSpaceSignY) {
    if (light.shadowFixedArea || light.csmLevel === CSMLevel.LEVEL_1) {
      vp.left = 0;
      vp.top = 0;
      vp.width = Math.trunc(w);
      vp.height = Math.trunc(h);
    } else {
      vp.left = Math.trunc(level % 2 * 0.5 * w);

      if (screenSpaceSignY > 0) {
        vp.top = Math.trunc((1 - Math.floor(level / 2)) * 0.5 * h);
      } else {
        vp.top = Math.trunc(Math.floor(level / 2) * 0.5 * h);
      }

      vp.width = Math.trunc(0.5 * w);
      vp.height = Math.trunc(0.5 * h);
    }

    vp.left = Math.max(0, vp.left);
    vp.top = Math.max(0, vp.top);
    vp.width = Math.max(1, vp.width);
    vp.height = Math.max(1, vp.height);
  }

  function setupPipelineConfigs(ppl, configs) {
    var sampleFeature = FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
    var device = ppl.device; // Platform

    configs.isWeb = !sys.isNative;
    configs.isWebGL1 = device.gfxAPI === gfx.API.WEBGL;
    configs.isWebGPU = device.gfxAPI === gfx.API.WEBGPU;
    configs.isMobile = sys.isMobile; // Rendering

    configs.isHDR = ppl.pipelineSceneData.isHDR; // Has tone mapping

    configs.useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
    configs.toneMappingType = ppl.pipelineSceneData.postSettings.toneMappingType; // Shadow

    var shadowInfo = ppl.pipelineSceneData.shadows;
    configs.shadowEnabled = shadowInfo.enabled;
    configs.shadowMapFormat = pipeline.supportsR32FloatTexture(ppl.device) ? Format.R32F : Format.RGBA8;
    configs.shadowMapSize.set(shadowInfo.size);
    configs.usePlanarShadow = shadowInfo.enabled && shadowInfo.type === renderer.scene.ShadowType.Planar; // Device

    configs.screenSpaceSignY = ppl.device.capabilities.screenSpaceSignY;
    configs.supportDepthSample = (ppl.device.getFormatFeatures(Format.DEPTH_STENCIL) & sampleFeature) === sampleFeature; // Constants

    var screenSpaceSignY = device.capabilities.screenSpaceSignY;
    configs.platform.x = configs.isMobile ? 1.0 : 0.0;
    configs.platform.w = screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
  }

  function setupPostProcessConfigs(pipelineConfigs, settings, cameraConfigs) {
    cameraConfigs.enableDOF = pipelineConfigs.supportDepthSample && settings.depthOfField.enabled && !!settings.depthOfField.material;
    cameraConfigs.enableBloom = settings.bloom.enabled && !!settings.bloom.material;
    cameraConfigs.enableColorGrading = settings.colorGrading.enabled && !!settings.colorGrading.material && !!settings.colorGrading.colorGradingMap;
    cameraConfigs.enableFXAA = settings.fxaa.enabled && !!settings.fxaa.material;
    cameraConfigs.enablePostProcess = cameraConfigs.enableDOF || cameraConfigs.enableBloom || cameraConfigs.enableColorGrading || cameraConfigs.enableFXAA;
  }

  function setupCameraConfigs(camera, pipelineConfigs, cameraConfigs) {
    var window = camera.window;
    var isMainGameWindow = camera.cameraUsage === CameraUsage.GAME && !!window.swapchain;
    var isEditorView = camera.cameraUsage === CameraUsage.SCENE_VIEW || camera.cameraUsage === CameraUsage.PREVIEW;
    cameraConfigs.colorName = window.colorName;
    cameraConfigs.depthStencilName = window.depthStencilName;
    cameraConfigs.useFullPipeline = (camera.visibility & Layers.Enum.DEFAULT) !== 0;
    cameraConfigs.enableMainLightShadowMap = pipelineConfigs.shadowEnabled && !pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
    cameraConfigs.enableMainLightPlanarShadowMap = pipelineConfigs.shadowEnabled && pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
    cameraConfigs.enablePlanarReflectionProbe = isMainGameWindow || camera.cameraUsage === CameraUsage.SCENE_VIEW;
    cameraConfigs.enableProfiler = DEBUG && isMainGameWindow;
    cameraConfigs.settings = camera.pipelineSettings ? camera.pipelineSettings : defaultSettings;
    setupPostProcessConfigs(pipelineConfigs, cameraConfigs.settings, cameraConfigs);

    if (isEditorView) {
      var editorSettings = rendering.getEditorPipelineSettings();

      if (editorSettings) {
        cameraConfigs.settings = editorSettings;
        setupPostProcessConfigs(pipelineConfigs, cameraConfigs.settings, cameraConfigs);
      }
    } // MSAA


    cameraConfigs.enableMSAA = cameraConfigs.settings.msaa.enabled && !pipelineConfigs.isWeb // TODO(zhouzhenglong): remove this constraint
    && !pipelineConfigs.isWebGL1; // Shading scale

    cameraConfigs.shadingScale = cameraConfigs.settings.shadingScale;
    cameraConfigs.enableShadingScale = cameraConfigs.settings.enableShadingScale && cameraConfigs.shadingScale !== 1.0; // FSR (Depend on Shading scale)

    cameraConfigs.enableFSR = cameraConfigs.settings.fsr.enabled && !!cameraConfigs.settings.fsr.material && cameraConfigs.enableShadingScale && cameraConfigs.shadingScale < 1.0; // Forward rendering (Depend on MSAA and TBR)

    cameraConfigs.singleForwardRadiancePass = pipelineConfigs.isMobile || cameraConfigs.enableMSAA;
    cameraConfigs.enableHDR = cameraConfigs.useFullPipeline && pipelineConfigs.useFloatOutput;
    cameraConfigs.radianceFormat = cameraConfigs.enableHDR ? gfx.Format.RGBA16F : gfx.Format.RGBA8;
  }

  function _reportPossibleCrUseOfPipelineSettings(extras) {
    _reporterNs.report("PipelineSettings", "./builtin-pipeline-types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmakePipelineSettings(extras) {
    _reporterNs.report("makePipelineSettings", "./builtin-pipeline-types", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assert = _cc.assert;
      clamp = _cc.clamp;
      geometry = _cc.geometry;
      gfx = _cc.gfx;
      Layers = _cc.Layers;
      Material = _cc.Material;
      pipeline = _cc.pipeline;
      renderer = _cc.renderer;
      rendering = _cc.rendering;
      sys = _cc.sys;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Vec4 = _cc.Vec4;
      cclegacy = _cc.cclegacy;
      PipelineEventType = _cc.PipelineEventType;
      warn = _cc.warn;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      makePipelineSettings = _unresolved_2.makePipelineSettings;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff9b0GZzgRM/obMbHGfCNbk", "builtin-pipeline", undefined);
      /*
       Copyright (c) 2021-2024 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */


      __checkObsolete__(['assert', 'clamp', 'geometry', 'gfx', 'Layers', 'Material', 'pipeline', 'renderer', 'rendering', 'sys', 'Vec2', 'Vec3', 'Vec4', 'cclegacy', 'PipelineEventType', 'PipelineEventProcessor', 'ReflectionProbeManager', 'warn']);

      ({
        AABB,
        Sphere,
        intersect
      } = geometry);
      ({
        ClearFlagBit,
        Color,
        Format,
        FormatFeatureBit,
        LoadOp,
        StoreOp,
        TextureType,
        Viewport
      } = gfx);
      ({
        scene
      } = renderer);
      ({
        CameraUsage,
        CSMLevel,
        LightType
      } = scene);
      PipelineConfigs = class PipelineConfigs {
        constructor() {
          this.isWeb = false;
          this.isWebGL1 = false;
          this.isWebGPU = false;
          this.isMobile = false;
          this.isHDR = false;
          this.useFloatOutput = false;
          this.toneMappingType = 0;
          // 0: ACES, 1: None
          this.shadowEnabled = false;
          this.shadowMapFormat = Format.R32F;
          this.shadowMapSize = new Vec2(1, 1);
          this.usePlanarShadow = false;
          this.screenSpaceSignY = 1;
          this.supportDepthSample = false;
          this.mobileMaxSpotLightShadowMaps = 1;
          this.platform = new Vec4(0, 0, 0, 0);
        }

      };
      defaultSettings = (_crd && makePipelineSettings === void 0 ? (_reportPossibleCrUseOfmakePipelineSettings({
        error: Error()
      }), makePipelineSettings) : makePipelineSettings)();
      CameraConfigs = class CameraConfigs {
        constructor() {
          this.colorName = '';
          this.depthStencilName = '';
          this.enableMainLightShadowMap = false;
          this.enableMainLightPlanarShadowMap = false;
          this.enablePostProcess = false;
          this.enableProfiler = false;
          this.enableShadingScale = false;
          this.enableMSAA = false;
          this.enableDOF = false;
          this.enableBloom = false;
          this.enableColorGrading = false;
          this.enableFXAA = false;
          this.enableFSR = false;
          this.enableHDR = false;
          this.enablePlanarReflectionProbe = false;
          this.useFullPipeline = false;
          this.singleForwardRadiancePass = false;
          this.radianceFormat = gfx.Format.RGBA8;
          this.shadingScale = 0.5;
          this.settings = defaultSettings;
        }

      };

      if (rendering) {
        ({
          QueueHint,
          SceneFlags,
          ResourceFlags,
          ResourceResidency
        } = rendering);

        class ForwardLighting {
          constructor() {
            // Active lights
            this.lights = [];
            // Active spot lights with shadows (Mutually exclusive with `lights`)
            this.shadowEnabledSpotLights = [];
            // Internal cached resources
            this._sphere = Sphere.create(0, 0, 0, 1);
            this._boundingBox = new AABB();
            this._rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
          }

          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          cullLights(scene, frustum, cameraPos) {
            // TODO(zhouzhenglong): Make light culling native
            this.lights.length = 0;
            this.shadowEnabledSpotLights.length = 0; // spot lights

            for (var light of scene.spotLights) {
              if (light.baked) {
                continue;
              }

              Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);

              if (intersect.sphereFrustum(this._sphere, frustum)) {
                if (light.shadowEnabled) {
                  this.shadowEnabledSpotLights.push(light);
                } else {
                  this.lights.push(light);
                }
              }
            } // sphere lights


            for (var _light of scene.sphereLights) {
              if (_light.baked) {
                continue;
              }

              Sphere.set(this._sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);

              if (intersect.sphereFrustum(this._sphere, frustum)) {
                this.lights.push(_light);
              }
            } // point lights


            for (var _light2 of scene.pointLights) {
              if (_light2.baked) {
                continue;
              }

              Sphere.set(this._sphere, _light2.position.x, _light2.position.y, _light2.position.z, _light2.range);

              if (intersect.sphereFrustum(this._sphere, frustum)) {
                this.lights.push(_light2);
              }
            } // ranged dir lights


            for (var _light3 of scene.rangedDirLights) {
              AABB.transform(this._boundingBox, this._rangedDirLightBoundingBox, _light3.node.getWorldMatrix());

              if (intersect.aabbFrustum(this._boundingBox, frustum)) {
                this.lights.push(_light3);
              }
            }

            if (cameraPos) {
              this.shadowEnabledSpotLights.sort((lhs, rhs) => Vec3.squaredDistance(cameraPos, lhs.position) - Vec3.squaredDistance(cameraPos, rhs.position));
            }
          }

          _addLightQueues(camera, pass) {
            for (var light of this.lights) {
              var queue = pass.addQueue(QueueHint.BLEND, 'forward-add');

              switch (light.type) {
                case LightType.SPHERE:
                  queue.name = 'sphere-light';
                  break;

                case LightType.SPOT:
                  queue.name = 'spot-light';
                  break;

                case LightType.POINT:
                  queue.name = 'point-light';
                  break;

                case LightType.RANGED_DIRECTIONAL:
                  queue.name = 'ranged-directional-light';
                  break;

                default:
                  queue.name = 'unknown-light';
              }

              queue.addScene(camera, SceneFlags.BLEND, light);
            }
          }

          addSpotlightShadowPasses(ppl, camera, maxNumShadowMaps) {
            var i = 0;

            for (var light of this.shadowEnabledSpotLights) {
              var shadowMapSize = ppl.pipelineSceneData.shadows.size;
              var shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
              shadowPass.name = "SpotLightShadowPass" + i;
              shadowPass.addRenderTarget("SpotShadowMap" + i, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
              shadowPass.addDepthStencil("SpotShadowDepth" + i, LoadOp.CLEAR, StoreOp.DISCARD);
              shadowPass.addQueue(QueueHint.NONE, 'shadow-caster').addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light);
              ++i;

              if (i >= maxNumShadowMaps) {
                break;
              }
            }
          }

          addLightQueues(pass, camera, maxNumShadowMaps) {
            this._addLightQueues(camera, pass);

            var i = 0;

            for (var light of this.shadowEnabledSpotLights) {
              // Add spot-light pass
              // Save last RenderPass to the `pass` variable
              // TODO(zhouzhenglong): Fix per queue addTexture
              pass.addTexture("SpotShadowMap" + i, 'cc_spotShadowMap');
              var queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              queue.addScene(camera, SceneFlags.BLEND, light);
              ++i;

              if (i >= maxNumShadowMaps) {
                break;
              }
            }
          } // Notice: ForwardLighting cannot handle a lot of lights.
          // If there are too many lights, the performance will be very poor.
          // If many lights are needed, please implement a forward+ or deferred rendering pipeline.


          addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id, // window id
          width, height, camera, viewport, ppl, pass) {
            this._addLightQueues(camera, pass);

            var count = 0;
            var shadowMapSize = ppl.pipelineSceneData.shadows.size;

            for (var light of this.shadowEnabledSpotLights) {
              var shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
              shadowPass.name = 'SpotlightShadowPass'; // Reuse csm shadow map

              shadowPass.addRenderTarget("ShadowMap" + id, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
              shadowPass.addDepthStencil("ShadowDepth" + id, LoadOp.CLEAR, StoreOp.DISCARD);
              shadowPass.addQueue(QueueHint.NONE, 'shadow-caster').addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light); // Add spot-light pass
              // Save last RenderPass to the `pass` variable

              ++count;
              var storeOp = count === this.shadowEnabledSpotLights.length ? depthStencilStoreOp : StoreOp.STORE;
              pass = ppl.addRenderPass(width, height, 'default');
              pass.name = 'SpotlightWithShadowMap';
              pass.setViewport(viewport);
              pass.addRenderTarget(colorName, LoadOp.LOAD);
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, storeOp);
              pass.addTexture("ShadowMap" + id, 'cc_spotShadowMap');
              var queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              queue.addScene(camera, SceneFlags.BLEND, light);
            }

            return pass;
          }

          isMultipleLightPassesNeeded() {
            return this.shadowEnabledSpotLights.length > 0;
          }

        }

        class BuiltinPipelineBuilder {
          constructor() {
            this._pipelineEvent = cclegacy.director.root.pipelineEvent;
            // Internal cached resources
            this._clearColor = new Color(0, 0, 0, 1);
            this._clearColorTransparentBlack = new Color(0, 0, 0, 0);
            this._reflectionProbeClearColor = new Vec3(0, 0, 0);
            this._viewport = new Viewport();
            this._configs = new PipelineConfigs();
            this._cameraConfigs = new CameraConfigs();
            // DepthOfField
            this._cocParams = new Vec4(0, 0, 0, 0);
            this._cocTexSize = new Vec4(0, 0, 0, 0);
            // Bloom
            this._bloomParams = new Vec4(0, 0, 0, 0);
            this._bloomTexSize = new Vec4(0, 0, 0, 0);
            this._bloomWidths = [];
            this._bloomHeights = [];
            this._bloomTexNames = [];
            // Color Grading
            this._colorGradingTexSize = new Vec2(0, 0);
            // FXAA
            this._fxaaParams = new Vec4(0, 0, 0, 0);
            // FSR
            this._fsrParams = new Vec4(0, 0, 0, 0);
            this._fsrTexSize = new Vec4(0, 0, 0, 0);
            // Materials
            this._copyAndTonemapMaterial = new Material();
            // Internal States
            this._initialized = false;
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove this flag
            // Forward lighting
            this.forwardLighting = new ForwardLighting();
          }

          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          windowResize(ppl, window, camera, nativeWidth, nativeHeight) {
            setupPipelineConfigs(ppl, this._configs);
            setupCameraConfigs(camera, this._configs, this._cameraConfigs);
            var settings = this._cameraConfigs.settings;
            var id = window.renderWindowId;
            var width = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * this._cameraConfigs.shadingScale), 1) : nativeWidth;
            var height = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * this._cameraConfigs.shadingScale), 1) : nativeHeight; // Render Window (UI)

            ppl.addRenderWindow(this._cameraConfigs.colorName, Format.RGBA8, nativeWidth, nativeHeight, window, this._cameraConfigs.depthStencilName);

            if (this._cameraConfigs.enableShadingScale) {
              ppl.addDepthStencil("ScaledSceneDepth" + id, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget("ScaledRadiance" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("ScaledLdrColor" + id, Format.RGBA8, width, height);
            } else {
              ppl.addDepthStencil("SceneDepth" + id, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget("Radiance" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("LdrColor" + id, Format.RGBA8, width, height);
            }

            if (this._cameraConfigs.enableFSR) {
              ppl.addRenderTarget("FsrColor" + id, Format.RGBA8, nativeWidth, nativeHeight);
            } // MsaaRadiance


            if (this._cameraConfigs.enableMSAA) {
              // Notice: We never store multisample results.
              // These samples are always resolved and discarded at the end of the render pass.
              // So the ResourceResidency should be MEMORYLESS.
              if (this._cameraConfigs.enableHDR) {
                ppl.addTexture("MsaaRadiance" + id, TextureType.TEX2D, this._cameraConfigs.radianceFormat, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
              } else {
                ppl.addTexture("MsaaRadiance" + id, TextureType.TEX2D, Format.RGBA8, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
              }

              ppl.addTexture("MsaaDepthStencil" + id, TextureType.TEX2D, Format.DEPTH_STENCIL, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.DEPTH_STENCIL_ATTACHMENT, ResourceResidency.MEMORYLESS);
            } // Mainlight ShadowMap


            ppl.addRenderTarget("ShadowMap" + id, this._configs.shadowMapFormat, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
            ppl.addDepthStencil("ShadowDepth" + id, Format.DEPTH_STENCIL, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y); // Spot-light shadow maps

            if (this._cameraConfigs.singleForwardRadiancePass) {
              var count = this._configs.mobileMaxSpotLightShadowMaps;

              for (var i = 0; i !== count; ++i) {
                ppl.addRenderTarget("SpotShadowMap" + i, this._configs.shadowMapFormat, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
                ppl.addDepthStencil("SpotShadowDepth" + i, Format.DEPTH_STENCIL, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
              }
            } // ---------------------------------------------------------
            // Post Process
            // ---------------------------------------------------------
            // DepthOfField


            if (this._cameraConfigs.enableDOF) {
              var halfWidth = Math.max(Math.floor(width / 2), 1);
              var halfHeight = Math.max(Math.floor(height / 2), 1); // `DofCoc${id}` texture will reuse ldrColorName

              ppl.addRenderTarget("DofRadiance" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("DofPrefilter" + id, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
              ppl.addRenderTarget("DofBokeh" + id, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
              ppl.addRenderTarget("DofFilter" + id, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
            } // Bloom (Kawase Dual Filter)


            if (this._cameraConfigs.enableBloom) {
              var bloomWidth = width;
              var bloomHeight = height;

              for (var _i = 0; _i !== settings.bloom.iterations + 1; ++_i) {
                bloomWidth = Math.max(Math.floor(bloomWidth / 2), 1);
                bloomHeight = Math.max(Math.floor(bloomHeight / 2), 1);
                ppl.addRenderTarget("BloomTex" + id + "_" + _i, this._cameraConfigs.radianceFormat, bloomWidth, bloomHeight);
              }
            } // Color Grading


            if (this._cameraConfigs.enableColorGrading && settings.colorGrading.material && settings.colorGrading.colorGradingMap) {
              settings.colorGrading.material.setProperty('colorGradingMap', settings.colorGrading.colorGradingMap);
            } // FXAA


            if (this._cameraConfigs.enableFXAA && this._cameraConfigs.enableShadingScale) {
              ppl.addRenderTarget("AaColor" + id, Format.RGBA8, width, height);
            }
          }

          setup(cameras, ppl) {
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove _initMaterials
            if (this._initMaterials(ppl)) {
              return;
            } // Render cameras
            // log(`==================== One Frame ====================`);


            for (var camera of cameras) {
              // Skip invalid camera
              if (!camera.scene || !camera.window) {
                continue;
              } // Setup camera configs


              setupCameraConfigs(camera, this._configs, this._cameraConfigs); // log(`Setup camera: ${camera.node!.name}, window: ${camera.window.renderWindowId}, isFull: ${this._cameraConfigs.useFullPipeline}, `
              //     + `size: ${camera.window.width}x${camera.window.height}`);

              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera); // Build pipeline


              if (this._cameraConfigs.useFullPipeline) {
                this._buildForwardPipeline(ppl, camera, camera.scene);
              } else {
                this._buildSimplePipeline(ppl, camera);
              }

              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_END, camera);
            }
          } // ----------------------------------------------------------------
          // Pipelines
          // ----------------------------------------------------------------


          _buildSimplePipeline(ppl, camera) {
            var width = Math.max(Math.floor(camera.window.width), 1);
            var height = Math.max(Math.floor(camera.window.height), 1);
            var colorName = this._cameraConfigs.colorName;
            var depthStencilName = this._cameraConfigs.depthStencilName;
            var viewport = camera.viewport; // Reduce C++/TS interop

            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height); // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.

            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1);
            var clearColor = camera.clearColor; // Reduce C++/TS interop

            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;
            var pass = ppl.addRenderPass(width, height, 'default'); // bind output render target

            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, StoreOp.STORE);
            } // bind depth stencil buffer


            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            }

            pass.setViewport(this._viewport); // The opaque queue is used for Reflection probe preview

            pass.addQueue(QueueHint.OPAQUE).addScene(camera, SceneFlags.OPAQUE); // The blend queue is used for UI and Gizmos

            var flags = SceneFlags.BLEND | SceneFlags.UI;

            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }

            pass.addQueue(QueueHint.BLEND).addScene(camera, flags);
          }

          _buildForwardPipeline(ppl, camera, scene) {
            // Init
            var settings = this._cameraConfigs.settings;
            var nativeWidth = Math.max(Math.floor(camera.window.width), 1);
            var nativeHeight = Math.max(Math.floor(camera.window.height), 1);
            var width = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * this._cameraConfigs.shadingScale), 1) : nativeWidth;
            var height = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * this._cameraConfigs.shadingScale), 1) : nativeHeight;
            var id = camera.window.renderWindowId;
            var colorName = this._cameraConfigs.colorName;
            var sceneDepth = this._cameraConfigs.enableShadingScale ? "ScaledSceneDepth" + id : "SceneDepth" + id;
            var radianceName = this._cameraConfigs.enableShadingScale ? "ScaledRadiance" + id : "Radiance" + id;
            var ldrColorName = this._cameraConfigs.enableShadingScale ? "ScaledLdrColor" + id : "LdrColor" + id;
            var mainLight = scene.mainLight; // Forward Lighting (Light Culling)

            this.forwardLighting.cullLights(scene, camera.frustum); // Main Directional light CSM Shadow Map

            if (this._cameraConfigs.enableMainLightShadowMap) {
              assert(!!mainLight);

              this._addCascadedShadowMapPass(ppl, id, mainLight, camera);
            } // Spot light shadow maps (Mobile or MSAA)


            if (this._cameraConfigs.singleForwardRadiancePass) {
              // Currently, only support 1 spot light with shadow map on mobile platform.
              // TODO(zhouzhenglong): Relex this limitation.
              this.forwardLighting.addSpotlightShadowPasses(ppl, camera, this._configs.mobileMaxSpotLightShadowMaps);
            }

            this._tryAddReflectionProbePasses(ppl, id, mainLight, camera.scene); // Forward Lighting


            var lastPass;

            if (this._cameraConfigs.enablePostProcess) {
              // Post Process
              // Radiance and DoF
              if (this._cameraConfigs.enableDOF) {
                assert(!!settings.depthOfField.material);
                var dofRadianceName = "DofRadiance" + id; // Disable MSAA, depth stencil cannot be resolved cross-platformly

                this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, dofRadianceName, sceneDepth, true, StoreOp.STORE);

                this._addDepthOfFieldPasses(ppl, settings, settings.depthOfField.material, id, camera, width, height, dofRadianceName, sceneDepth, radianceName, ldrColorName);
              } else {
                this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, radianceName, sceneDepth);
              } // Bloom


              if (this._cameraConfigs.enableBloom) {
                assert(!!settings.bloom.material);

                this._addKawaseDualFilterBloomPasses(ppl, settings, settings.bloom.material, id, width, height, radianceName);
              } // Tone Mapping and FXAA


              if (this._cameraConfigs.enableFXAA) {
                assert(!!settings.fxaa.material);
                var copyAndTonemapPassNeeded = this._cameraConfigs.enableHDR || this._cameraConfigs.enableColorGrading;
                var ldrColorBufferName = copyAndTonemapPassNeeded ? ldrColorName : radianceName; // FXAA is applied after tone mapping

                if (copyAndTonemapPassNeeded) {
                  this._addCopyAndTonemapPass(ppl, settings, width, height, radianceName, ldrColorBufferName);
                } // Apply FXAA


                if (this._cameraConfigs.enableShadingScale) {
                  var aaColorName = "AaColor" + id; // Apply FXAA on scaled image

                  this._addFxaaPass(ppl, settings.fxaa.material, width, height, ldrColorBufferName, aaColorName); // Copy FXAA result to screen


                  if (this._cameraConfigs.enableFSR && settings.fsr.material) {
                    // Apply FSR
                    lastPass = this._addFsrPass(ppl, settings, settings.fsr.material, id, width, height, aaColorName, nativeWidth, nativeHeight, colorName);
                  } else {
                    // Scale FXAA result to screen
                    lastPass = this._addCopyPass(ppl, nativeWidth, nativeHeight, aaColorName, colorName);
                  }
                } else {
                  // Image not scaled, output FXAA result to screen directly
                  lastPass = this._addFxaaPass(ppl, settings.fxaa.material, nativeWidth, nativeHeight, ldrColorBufferName, colorName);
                }
              } else {
                // No FXAA (Size might be scaled)
                lastPass = this._addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName);
              }
            } else if (this._cameraConfigs.enableHDR || this._cameraConfigs.enableShadingScale) {
              // HDR or Scaled LDR
              this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, radianceName, sceneDepth);

              lastPass = this._addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName);
            } else {
              // LDR (Size is not scaled)
              lastPass = this._addForwardRadiancePasses(ppl, id, camera, nativeWidth, nativeHeight, mainLight, colorName, this._cameraConfigs.depthStencilName);
            } // UI size is not scaled, does not have AA


            this._addUIQueue(camera, lastPass);
          } // ----------------------------------------------------------------
          // Common Passes
          // ----------------------------------------------------------------


          _addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName) {
            var lastPass;

            if (this._cameraConfigs.enableFSR && settings.fsr.material) {
              // Apply FSR
              this._addCopyAndTonemapPass(ppl, settings, width, height, radianceName, ldrColorName);

              lastPass = this._addFsrPass(ppl, settings, settings.fsr.material, id, width, height, ldrColorName, nativeWidth, nativeHeight, colorName);
            } else {
              // Output HDR/LDR result to screen directly (Size might be scaled)
              lastPass = this._addCopyAndTonemapPass(ppl, settings, nativeWidth, nativeHeight, radianceName, colorName);
            }

            return lastPass;
          }

          _addCascadedShadowMapPass(ppl, id, light, camera) {
            // ----------------------------------------------------------------
            // Dynamic states
            // ----------------------------------------------------------------
            var width = ppl.pipelineSceneData.shadows.size.x;
            var height = ppl.pipelineSceneData.shadows.size.y;
            this._viewport.left = 0;
            this._viewport.top = 0;
            this._viewport.width = width;
            this._viewport.height = height; // ----------------------------------------------------------------
            // CSM Shadow Map
            // ----------------------------------------------------------------

            var pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'CascadedShadowMap';
            pass.addRenderTarget("ShadowMap" + id, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
            pass.addDepthStencil("ShadowDepth" + id, LoadOp.CLEAR, StoreOp.DISCARD);
            var csmLevel = ppl.pipelineSceneData.csmSupported ? light.csmLevel : 1; // Add shadow map viewports

            for (var level = 0; level !== csmLevel; ++level) {
              getCsmMainLightViewport(light, width, height, level, this._viewport, this._configs.screenSpaceSignY);
              var queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');

              if (!this._configs.isWebGPU) {
                // Temporary workaround for WebGPU
                queue.setViewport(this._viewport);
              }

              queue.addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light, level);
            }
          }

          _addCopyPass(ppl, width, height, input, output) {
            var pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
            pass.addRenderTarget(output, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            pass.addTexture(input, 'inputTexture');
            pass.setVec4('g_platform', this._configs.platform);
            pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(this._copyAndTonemapMaterial, 1);
            return pass;
          }

          _addCopyAndTonemapPass(ppl, settings, width, height, radianceName, colorName) {
            var pass;

            if (this._cameraConfigs.enableColorGrading && settings.colorGrading.material && settings.colorGrading.colorGradingMap) {
              var lutTex = settings.colorGrading.colorGradingMap;
              this._colorGradingTexSize.x = lutTex.width;
              this._colorGradingTexSize.y = lutTex.height;
              var isSquareMap = lutTex.width === lutTex.height;

              if (isSquareMap) {
                pass = ppl.addRenderPass(width, height, 'cc-color-grading-8x8');
              } else {
                pass = ppl.addRenderPass(width, height, 'cc-color-grading-nx1');
              }

              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              pass.addTexture(radianceName, 'sceneColorMap');
              pass.setVec4('g_platform', this._configs.platform);
              pass.setVec2('lutTextureSize', this._colorGradingTexSize);
              pass.setFloat('contribute', settings.colorGrading.contribute);
              pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(settings.colorGrading.material, isSquareMap ? 1 : 0);
            } else {
              pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              pass.addTexture(radianceName, 'inputTexture');
              pass.setVec4('g_platform', this._configs.platform);

              if (settings.toneMapping.material) {
                pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(settings.toneMapping.material, 0);
              } else {
                pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(this._copyAndTonemapMaterial, 0);
              }
            }

            return pass;
          }

          _buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight, scene) {
            if (scene === void 0) {
              scene = null;
            }

            // set viewport
            pass.setViewport(this._viewport);
            var colorStoreOp = this._cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE; // bind output render target

            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
            } // bind depth stencil buffer


            if (DEBUG) {
              if (colorName === this._cameraConfigs.colorName && depthStencilName !== this._cameraConfigs.depthStencilName) {
                warn('Default framebuffer cannot use custom depth stencil buffer');
              }
            }

            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, depthStencilStoreOp, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, depthStencilStoreOp);
            } // Set shadow map if enabled


            if (this._cameraConfigs.enableMainLightShadowMap) {
              pass.addTexture("ShadowMap" + id, 'cc_shadowMap');
            } // TODO(zhouzhenglong): Separate OPAQUE and MASK queue
            // add opaque and mask queue


            pass.addQueue(QueueHint.NONE) // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
            .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK, mainLight || undefined, scene ? scene : undefined);
          }

          _addDepthOfFieldPasses(ppl, settings, dofMaterial, id, camera, width, height, dofRadianceName, depthStencil, radianceName, ldrColorName) {
            // https://catlikecoding.com/unity/tutorials/advanced-rendering/depth-of-field/
            this._cocParams.x = settings.depthOfField.focusDistance;
            this._cocParams.y = settings.depthOfField.focusRange;
            this._cocParams.z = settings.depthOfField.bokehRadius;
            this._cocParams.w = 0.0;
            this._cocTexSize.x = 1.0 / width;
            this._cocTexSize.y = 1.0 / height;
            this._cocTexSize.z = width;
            this._cocTexSize.w = height;
            var halfWidth = Math.max(Math.floor(width / 2), 1);
            var halfHeight = Math.max(Math.floor(height / 2), 1);
            var cocName = ldrColorName;
            var prefilterName = "DofPrefilter" + id;
            var bokehName = "DofBokeh" + id;
            var filterName = "DofFilter" + id; // CoC

            var cocPass = ppl.addRenderPass(width, height, 'cc-dof-coc');
            cocPass.addRenderTarget(cocName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            cocPass.addTexture(depthStencil, 'DepthTex');
            cocPass.setVec4('g_platform', this._configs.platform);
            cocPass.setMat4('proj', camera.matProj);
            cocPass.setVec4('cocParams', this._cocParams);
            cocPass.addQueue(QueueHint.OPAQUE).addCameraQuad(camera, dofMaterial, 0); // addCameraQuad will set camera related UBOs
            // Downsample and Prefilter

            var prefilterPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-prefilter');
            prefilterPass.addRenderTarget(prefilterName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            prefilterPass.addTexture(dofRadianceName, 'colorTex');
            prefilterPass.addTexture(cocName, 'cocTex');
            prefilterPass.setVec4('g_platform', this._configs.platform);
            prefilterPass.setVec4('mainTexTexelSize', this._cocTexSize);
            prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 1); // Bokeh blur

            var bokehPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-bokeh');
            bokehPass.addRenderTarget(bokehName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            bokehPass.addTexture(prefilterName, 'prefilterTex');
            bokehPass.setVec4('g_platform', this._configs.platform);
            bokehPass.setVec4('mainTexTexelSize', this._cocTexSize);
            bokehPass.setVec4('cocParams', this._cocParams);
            bokehPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 2); // Filtering

            var filterPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-filter');
            filterPass.addRenderTarget(filterName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            filterPass.addTexture(bokehName, 'bokehTex');
            filterPass.setVec4('g_platform', this._configs.platform);
            filterPass.setVec4('mainTexTexelSize', this._cocTexSize);
            filterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 3); // Combine

            var combinePass = ppl.addRenderPass(width, height, 'cc-dof-combine');
            combinePass.addRenderTarget(radianceName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            combinePass.addTexture(dofRadianceName, 'colorTex');
            combinePass.addTexture(cocName, 'cocTex');
            combinePass.addTexture(filterName, 'filterTex');
            combinePass.setVec4('g_platform', this._configs.platform);
            combinePass.setVec4('cocParams', this._cocParams);
            combinePass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 4);
          }

          _addKawaseDualFilterBloomPasses(ppl, settings, bloomMaterial, id, width, height, radianceName) {
            // Based on Kawase Dual Filter Blur. Saves bandwidth on mobile devices.
            // eslint-disable-next-line max-len
            // https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph2015_2D00_mmg_2D00_marius_2D00_slides.pdf
            // Size: [prefilter(1/2), downsample(1/4), downsample(1/8), downsample(1/16), ...]
            var iterations = settings.bloom.iterations;
            var sizeCount = iterations + 1;
            this._bloomWidths.length = sizeCount;
            this._bloomHeights.length = sizeCount;
            this._bloomWidths[0] = Math.max(Math.floor(width / 2), 1);
            this._bloomHeights[0] = Math.max(Math.floor(height / 2), 1);

            for (var i = 1; i !== sizeCount; ++i) {
              this._bloomWidths[i] = Math.max(Math.floor(this._bloomWidths[i - 1] / 2), 1);
              this._bloomHeights[i] = Math.max(Math.floor(this._bloomHeights[i - 1] / 2), 1);
            } // Bloom texture names


            this._bloomTexNames.length = sizeCount;

            for (var _i2 = 0; _i2 !== sizeCount; ++_i2) {
              this._bloomTexNames[_i2] = "BloomTex" + id + "_" + _i2;
            } // Setup bloom parameters


            this._bloomParams.x = this._configs.useFloatOutput ? 1 : 0;
            this._bloomParams.x = 0; // unused

            this._bloomParams.z = settings.bloom.threshold;
            this._bloomParams.w = settings.bloom.enableAlphaMask ? 1 : 0; // Prefilter pass

            var prefilterPass = ppl.addRenderPass(this._bloomWidths[0], this._bloomHeights[0], 'cc-bloom-prefilter');
            prefilterPass.addRenderTarget(this._bloomTexNames[0], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            prefilterPass.addTexture(radianceName, 'inputTexture');
            prefilterPass.setVec4('g_platform', this._configs.platform);
            prefilterPass.setVec4('bloomParams', this._bloomParams);
            prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 0); // Downsample passes

            for (var _i3 = 1; _i3 !== sizeCount; ++_i3) {
              var downPass = ppl.addRenderPass(this._bloomWidths[_i3], this._bloomHeights[_i3], 'cc-bloom-downsample');
              downPass.addRenderTarget(this._bloomTexNames[_i3], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              downPass.addTexture(this._bloomTexNames[_i3 - 1], 'bloomTexture');
              this._bloomTexSize.x = this._bloomWidths[_i3 - 1];
              this._bloomTexSize.y = this._bloomHeights[_i3 - 1];
              downPass.setVec4('g_platform', this._configs.platform);
              downPass.setVec4('bloomTexSize', this._bloomTexSize);
              downPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 1);
            } // Upsample passes


            for (var _i4 = iterations; _i4-- > 0;) {
              var upPass = ppl.addRenderPass(this._bloomWidths[_i4], this._bloomHeights[_i4], 'cc-bloom-upsample');
              upPass.addRenderTarget(this._bloomTexNames[_i4], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              upPass.addTexture(this._bloomTexNames[_i4 + 1], 'bloomTexture');
              this._bloomTexSize.x = this._bloomWidths[_i4 + 1];
              this._bloomTexSize.y = this._bloomHeights[_i4 + 1];
              upPass.setVec4('g_platform', this._configs.platform);
              upPass.setVec4('bloomTexSize', this._bloomTexSize);
              upPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 2);
            } // Combine pass


            var combinePass = ppl.addRenderPass(width, height, 'cc-bloom-combine');
            combinePass.addRenderTarget(radianceName, LoadOp.LOAD, StoreOp.STORE);
            combinePass.addTexture(this._bloomTexNames[0], 'bloomTexture');
            combinePass.setVec4('g_platform', this._configs.platform);
            combinePass.setVec4('bloomParams', this._bloomParams);
            combinePass.addQueue(QueueHint.BLEND).addFullscreenQuad(bloomMaterial, 3);
          }

          _addFsrPass(ppl, settings, fsrMaterial, id, width, height, ldrColorName, nativeWidth, nativeHeight, colorName) {
            this._fsrTexSize.x = width;
            this._fsrTexSize.y = height;
            this._fsrTexSize.z = nativeWidth;
            this._fsrTexSize.w = nativeHeight;
            this._fsrParams.x = clamp(1.0 - settings.fsr.sharpness, 0.02, 0.98);
            var fsrColorName = "FsrColor" + id;
            var easuPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-easu');
            easuPass.addRenderTarget(fsrColorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            easuPass.addTexture(ldrColorName, 'outputResultMap');
            easuPass.setVec4('g_platform', this._configs.platform);
            easuPass.setVec4('fsrTexSize', this._fsrTexSize);
            easuPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 0);
            var rcasPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-rcas');
            rcasPass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            rcasPass.addTexture(fsrColorName, 'outputResultMap');
            rcasPass.setVec4('g_platform', this._configs.platform);
            rcasPass.setVec4('fsrTexSize', this._fsrTexSize);
            rcasPass.setVec4('fsrParams', this._fsrParams);
            rcasPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 1);
            return rcasPass;
          }

          _addFxaaPass(ppl, fxaaMaterial, width, height, ldrColorName, colorName) {
            this._fxaaParams.x = width;
            this._fxaaParams.y = height;
            this._fxaaParams.z = 1 / width;
            this._fxaaParams.w = 1 / height;
            var pass = ppl.addRenderPass(width, height, 'cc-fxaa');
            pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            pass.addTexture(ldrColorName, 'sceneColorMap');
            pass.setVec4('g_platform', this._configs.platform);
            pass.setVec4('texSize', this._fxaaParams);
            pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fxaaMaterial, 0);
            return pass;
          }

          _addUIQueue(camera, pass) {
            var flags = SceneFlags.UI;

            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }

            pass.addQueue(QueueHint.BLEND, 'default', 'default').addScene(camera, flags);
          } // ----------------------------------------------------------------
          // Forward
          // ----------------------------------------------------------------


          _addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, disableMSAA, depthStencilStoreOp) {
            if (disableMSAA === void 0) {
              disableMSAA = false;
            }

            if (depthStencilStoreOp === void 0) {
              depthStencilStoreOp = StoreOp.DISCARD;
            }

            // ----------------------------------------------------------------
            // Dynamic states
            // ----------------------------------------------------------------
            // Prepare camera clear color
            var clearColor = camera.clearColor; // Reduce C++/TS interop

            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w; // Prepare camera viewport

            var viewport = camera.viewport; // Reduce C++/TS interop

            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height); // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.

            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1); // MSAA

            var enableMSAA = !disableMSAA && this._cameraConfigs.enableMSAA;
            assert(!enableMSAA || this._cameraConfigs.singleForwardRadiancePass); // ----------------------------------------------------------------
            // Forward Lighting (Main Directional Light)
            // ----------------------------------------------------------------

            var pass = this._cameraConfigs.singleForwardRadiancePass ? this._addForwardSingleRadiancePass(ppl, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) : this._addForwardMultipleRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp); // Planar Shadow

            if (this._cameraConfigs.enableMainLightPlanarShadowMap) {
              this.addPlanarShadowQueue(camera, mainLight, pass);
            } // ----------------------------------------------------------------
            // Forward Lighting (Blend)
            // ----------------------------------------------------------------
            // Add transparent queue


            var sceneFlags = SceneFlags.BLEND | (camera.geometryRenderer ? SceneFlags.GEOMETRY : SceneFlags.NONE);
            pass.addQueue(QueueHint.BLEND).addScene(camera, sceneFlags, mainLight || undefined);
            return pass;
          }

          _addForwardSingleRadiancePass(ppl, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
            assert(this._cameraConfigs.singleForwardRadiancePass); // ----------------------------------------------------------------
            // Forward Lighting (Main Directional Light)
            // ----------------------------------------------------------------

            var pass;

            if (enableMSAA) {
              var msaaRadianceName = "MsaaRadiance" + id;
              var msaaDepthStencilName = "MsaaDepthStencil" + id;
              var sampleCount = this._cameraConfigs.settings.msaa.sampleCount;
              var msPass = ppl.addMultisampleRenderPass(width, height, sampleCount, 0, 'default');
              msPass.name = 'MsaaForwardPass'; // MSAA always discards depth stencil

              this._buildForwardMainLightPass(msPass, id, camera, msaaRadianceName, msaaDepthStencilName, StoreOp.DISCARD, mainLight);

              msPass.resolveRenderTarget(msaaRadianceName, colorName);
              pass = msPass;
            } else {
              pass = ppl.addRenderPass(width, height, 'default');
              pass.name = 'ForwardPass';

              this._buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight);
            }

            assert(pass !== undefined); // Forward Lighting (Additive Lights)

            this.forwardLighting.addLightQueues(pass, camera, this._configs.mobileMaxSpotLightShadowMaps);
            return pass;
          }

          addPlanarShadowQueue(camera, mainLight, pass) {
            pass.addQueue(QueueHint.BLEND, 'planar-shadow').addScene(camera, SceneFlags.SHADOW_CASTER | SceneFlags.PLANAR_SHADOW | SceneFlags.BLEND, mainLight || undefined);
          }

          _addForwardMultipleRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
            assert(!this._cameraConfigs.singleForwardRadiancePass); // Forward Lighting (Main Directional Light)

            var pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'ForwardPass';
            var firstStoreOp = this.forwardLighting.isMultipleLightPassesNeeded() ? StoreOp.STORE : depthStencilStoreOp;

            this._buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, firstStoreOp, mainLight); // Forward Lighting (Additive Lights)


            pass = this.forwardLighting.addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id, width, height, camera, this._viewport, ppl, pass);
            return pass;
          }

          _buildReflectionProbePass(pass, id, camera, colorName, depthStencilName, mainLight, scene) {
            if (scene === void 0) {
              scene = null;
            }

            // set viewport
            var colorStoreOp = this._cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE; // bind output render target

            if (forwardNeedClearColor(camera)) {
              this._reflectionProbeClearColor.x = camera.clearColor.x;
              this._reflectionProbeClearColor.y = camera.clearColor.y;
              this._reflectionProbeClearColor.z = camera.clearColor.z;
              var clearColor = rendering.packRGBE(this._reflectionProbeClearColor);
              this._clearColor.x = clearColor.x;
              this._clearColor.y = clearColor.y;
              this._clearColor.z = clearColor.z;
              this._clearColor.w = clearColor.w;
              pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
            } // bind depth stencil buffer


            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            } // Set shadow map if enabled


            if (this._cameraConfigs.enableMainLightShadowMap) {
              pass.addTexture("ShadowMap" + id, 'cc_shadowMap');
            } // TODO(zhouzhenglong): Separate OPAQUE and MASK queue
            // add opaque and mask queue


            pass.addQueue(QueueHint.NONE, 'reflect-map') // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
            .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.REFLECTION_PROBE, mainLight || undefined, scene ? scene : undefined);
          }

          _tryAddReflectionProbePasses(ppl, id, mainLight, scene) {
            var reflectionProbeManager = cclegacy.internal.reflectionProbeManager;

            if (!reflectionProbeManager) {
              return;
            }

            var probes = reflectionProbeManager.getProbes();
            var maxProbeCount = 4;
            var probeID = 0;

            for (var probe of probes) {
              if (!probe.needRender) {
                continue;
              }

              var area = probe.renderArea();
              var width = Math.max(Math.floor(area.x), 1);
              var height = Math.max(Math.floor(area.y), 1);

              if (probe.probeType === renderer.scene.ProbeType.PLANAR) {
                if (!this._cameraConfigs.enablePlanarReflectionProbe) {
                  continue;
                }

                var window = probe.realtimePlanarTexture.window;
                var colorName = "PlanarProbeRT" + probeID;
                var depthStencilName = "PlanarProbeDS" + probeID; // ProbeResource

                ppl.addRenderWindow(colorName, this._cameraConfigs.radianceFormat, width, height, window);
                ppl.addDepthStencil(depthStencilName, gfx.Format.DEPTH_STENCIL, width, height, ResourceResidency.MEMORYLESS); // Rendering

                var probePass = ppl.addRenderPass(width, height, 'default');
                probePass.name = "PlanarReflectionProbe" + probeID;

                this._buildReflectionProbePass(probePass, id, probe.camera, colorName, depthStencilName, mainLight, scene);
              } else if (EDITOR) {
                for (var faceIdx = 0; faceIdx < probe.bakedCubeTextures.length; faceIdx++) {
                  probe.updateCameraDir(faceIdx);
                  var _window = probe.bakedCubeTextures[faceIdx].window;

                  var _colorName = "CubeProbeRT" + probeID + faceIdx;

                  var _depthStencilName = "CubeProbeDS" + probeID + faceIdx; // ProbeResource


                  ppl.addRenderWindow(_colorName, this._cameraConfigs.radianceFormat, width, height, _window);
                  ppl.addDepthStencil(_depthStencilName, gfx.Format.DEPTH_STENCIL, width, height, ResourceResidency.MEMORYLESS); // Rendering

                  var _probePass = ppl.addRenderPass(width, height, 'default');

                  _probePass.name = "CubeProbe" + probeID + faceIdx;

                  this._buildReflectionProbePass(_probePass, id, probe.camera, _colorName, _depthStencilName, mainLight, scene);
                }

                probe.needRender = false;
              }

              ++probeID;

              if (probeID === maxProbeCount) {
                break;
              }
            }
          }

          _initMaterials(ppl) {
            if (this._initialized) {
              return 0;
            }

            setupPipelineConfigs(ppl, this._configs); // When add new effect asset, please add its uuid to the dependentAssets in cc.config.json.

            this._copyAndTonemapMaterial._uuid = "builtin-pipeline-tone-mapping-material";

            this._copyAndTonemapMaterial.initialize({
              effectName: 'pipeline/post-process/tone-mapping'
            });

            if (this._copyAndTonemapMaterial.effectAsset) {
              this._initialized = true;
            }

            return this._initialized ? 0 : 1;
          }

        }

        rendering.setCustomPipeline('Builtin', new BuiltinPipelineBuilder());
      } // if (rendering)


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59b7958b47eec6168615a6469581f8f48e26cb00.js.map