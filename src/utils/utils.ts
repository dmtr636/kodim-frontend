import React, { ComponentType } from "react";

export const isTablet = (width: number) => {
    return width >= 700 && width < 1280
}

export const isMobile = (width: number) => {
    return width < 700
}

export const ReactLazyPreload = (importStatement: () => Promise<{ default: ComponentType<any>; }>) => {
    const Component = React.lazy(importStatement) as any;
    Component.preload = importStatement;
    return Component;
};