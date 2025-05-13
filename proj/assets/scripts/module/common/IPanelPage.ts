import { Component } from "cc";

export interface IPanelPage extends Component {
    Show(...arg): void;
    Hide(): void;
}