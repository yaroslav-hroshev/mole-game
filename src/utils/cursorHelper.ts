export type TransformValues = {
  translateX: string;
  translateY: string;
  rotation: number;
};

export const getTransformValues = (element: HTMLElement): TransformValues | null => {
  const elementStyle: CSSStyleDeclaration = window.getComputedStyle(element);
  const transformValue: string = elementStyle.getPropertyValue('transform');
  if (transformValue && transformValue.startsWith('matrix')) {
    const matrixValues: RegExpMatchArray | null = transformValue.match(/matrix\(([^)]+)\)/);
    if (matrixValues) {
      const [_, a, b, c, x, y, f]: string[] = matrixValues[1].split(', ');
      const transformValues: TransformValues = {
        translateX: x,
        translateY: y,
        rotation: (Math.round(Math.atan2(parseFloat(b), parseFloat(a)) * (180/Math.PI))),
      };
      return transformValues;
    }
  }
  return null;
};

export const setTransformValue = (element: HTMLElement, lsVariable: string, rotateDeg: number = 0): void => {
  const transformValues: TransformValues | null = getTransformValues(element);
  if (transformValues !== null && transformValues) {
    const { translateX, translateY, rotation } = transformValues;
    console.log("Rotating before: ", rotation);
    element.style.transform = `translate(${translateX}px, ${translateY}px) rotate(-${rotateDeg}deg)`;
    transformValues.rotation = rotateDeg;
    window.localStorage.setItem(`${lsVariable}`, JSON.stringify(transformValues));
    // const transformValues2: TransformValues | null = getTransformValues(element);
    // console.log("Rotating after transform: ", transformValues2);
  }
};
