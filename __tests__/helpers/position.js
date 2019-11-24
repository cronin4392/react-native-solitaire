import { getLocation } from "../../helpers/position";
import { FOUNDATION_1, FOUNDATION_2, WASTE } from "../../constants/cards";

describe("Get location", () => {
  it("gets correct positions from xy", () => {
    expect(getLocation(0, 0)).toEqual(WASTE);
  });
});
