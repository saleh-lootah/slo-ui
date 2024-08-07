/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BasicCard {
        "description": string;
        "disabled": boolean;
        "heading": string;
        "href": string;
        "summary": string;
        "type": string;
    }
    interface SloAccordion {
    }
    interface SloAccordionItem {
        "disabled": boolean;
        "heading": string;
    }
    /**
     * @name Chip
     * @description Use chips to label, categorize, or organize items using keywords that describe them.
     * @category Data Display
     * @tag controls
     * @example <slo-chip dismissible="true">Important</slo-chip>
     */
    interface SloChip {
        /**
          * If true, the chip will have a close icon.
         */
        "dismissible": boolean;
        /**
          * If true, the chip will be selected.
         */
        "selected": boolean;
        /**
          * Chip value.
         */
        "value": string;
    }
}
export interface SloChipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSloChipElement;
}
declare global {
    interface HTMLBasicCardElement extends Components.BasicCard, HTMLStencilElement {
    }
    var HTMLBasicCardElement: {
        prototype: HTMLBasicCardElement;
        new (): HTMLBasicCardElement;
    };
    interface HTMLSloAccordionElement extends Components.SloAccordion, HTMLStencilElement {
    }
    var HTMLSloAccordionElement: {
        prototype: HTMLSloAccordionElement;
        new (): HTMLSloAccordionElement;
    };
    interface HTMLSloAccordionItemElement extends Components.SloAccordionItem, HTMLStencilElement {
    }
    var HTMLSloAccordionItemElement: {
        prototype: HTMLSloAccordionItemElement;
        new (): HTMLSloAccordionItemElement;
    };
    interface HTMLSloChipElementEventMap {
        "slo-chip--click": any;
        "slo-chip--dismiss": any;
    }
    /**
     * @name Chip
     * @description Use chips to label, categorize, or organize items using keywords that describe them.
     * @category Data Display
     * @tag controls
     * @example <slo-chip dismissible="true">Important</slo-chip>
     */
    interface HTMLSloChipElement extends Components.SloChip, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSloChipElementEventMap>(type: K, listener: (this: HTMLSloChipElement, ev: SloChipCustomEvent<HTMLSloChipElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSloChipElementEventMap>(type: K, listener: (this: HTMLSloChipElement, ev: SloChipCustomEvent<HTMLSloChipElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSloChipElement: {
        prototype: HTMLSloChipElement;
        new (): HTMLSloChipElement;
    };
    interface HTMLElementTagNameMap {
        "basic-card": HTMLBasicCardElement;
        "slo-accordion": HTMLSloAccordionElement;
        "slo-accordion-item": HTMLSloAccordionItemElement;
        "slo-chip": HTMLSloChipElement;
    }
}
declare namespace LocalJSX {
    interface BasicCard {
        "description"?: string;
        "disabled"?: boolean;
        "heading"?: string;
        "href"?: string;
        "summary"?: string;
        "type"?: string;
    }
    interface SloAccordion {
    }
    interface SloAccordionItem {
        "disabled"?: boolean;
        "heading"?: string;
    }
    /**
     * @name Chip
     * @description Use chips to label, categorize, or organize items using keywords that describe them.
     * @category Data Display
     * @tag controls
     * @example <slo-chip dismissible="true">Important</slo-chip>
     */
    interface SloChip {
        /**
          * If true, the chip will have a close icon.
         */
        "dismissible"?: boolean;
        /**
          * Emitted when the chip is clicked.
         */
        "onSlo-chip--click"?: (event: SloChipCustomEvent<any>) => void;
        /**
          * Emitted when the close icon is clicked.
         */
        "onSlo-chip--dismiss"?: (event: SloChipCustomEvent<any>) => void;
        /**
          * If true, the chip will be selected.
         */
        "selected"?: boolean;
        /**
          * Chip value.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "basic-card": BasicCard;
        "slo-accordion": SloAccordion;
        "slo-accordion-item": SloAccordionItem;
        "slo-chip": SloChip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "basic-card": LocalJSX.BasicCard & JSXBase.HTMLAttributes<HTMLBasicCardElement>;
            "slo-accordion": LocalJSX.SloAccordion & JSXBase.HTMLAttributes<HTMLSloAccordionElement>;
            "slo-accordion-item": LocalJSX.SloAccordionItem & JSXBase.HTMLAttributes<HTMLSloAccordionItemElement>;
            /**
             * @name Chip
             * @description Use chips to label, categorize, or organize items using keywords that describe them.
             * @category Data Display
             * @tag controls
             * @example <slo-chip dismissible="true">Important</slo-chip>
             */
            "slo-chip": LocalJSX.SloChip & JSXBase.HTMLAttributes<HTMLSloChipElement>;
        }
    }
}
