import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseButton from "./base-button.vue";

describe("BaseButton", () => {
  it("Mount component", () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper.html().includes("div")).toBe(true);
  });
});
