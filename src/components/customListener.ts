const useState = (state: any) =>
  new Proxy(
    { value: state },
    {
      set: function (target, key, value) {
        if (key === "value") {
          // Logic for Value Change
          // console.log(value);
        }
        target[key as keyof typeof target] = value;
        return true;
      },
    }
  );

const toggle = (
  element: HTMLElement,
  returningValue: { value: any },
  value?: boolean
) => {
  returningValue.value = value !== undefined ? value : !returningValue.value;
  element.classList.toggle("left-0", returningValue.value);
  element.classList.toggle("left-full", !returningValue.value);
};

export { useState, toggle };
