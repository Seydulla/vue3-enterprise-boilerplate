import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import BaseButton from "./base-button.vue";

describe("BaseButton", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper.text()).toContain("BaseButton");
  });
});
