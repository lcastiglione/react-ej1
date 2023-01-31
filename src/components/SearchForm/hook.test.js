import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "./hook";

const setup = (params) => renderHook(() => useForm(params));

describe("test hook useForm", () => {
  test("should change keyword", () => {
    const { result } = setup();
    act(() => {
      result.current.updateKeyword("value");
    });
    expect(result.current.keyword).toBe("value");
  });

  test("should use initial values", () => {
    const { result } = setup({ initialKeyword: "value" });
    expect(result.current.keyword).toBe("value");
  });

  test("should update correctly times when used twice", () => {
    const { result } = setup({ initialKeyword: "value" });
    act(() => {
      result.current.updateKeyword("v");
      result.current.updateKeyword("va");
    });
    expect(result.current.keyword).toBe("va");
    expect(result.current.times).toBe(2);
  });
});
