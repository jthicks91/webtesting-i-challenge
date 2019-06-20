const enhancer = require("./enhancer.js");
// test away!

const baseGun = {
  name: "A basic pistol that nobody uses in real shooters",
  durability: 5,
  enhancement: 10
};

const baseShield = {
  name:
    "a basic shield people switch out whenever they acquire one that is better",
  durability: 10,
  enhancement: 20
};

const baseMap = {
  name: "a basic map",
  durability: 15,
  enhancement: 19
};

describe("the enhancer", () => {
  // returns a new item when passed an exisiting item
  // returns a new item with the durability restored to 100.
  describe("the repair function", () => {
    it("returns a new item when passed an exisiting item", () => {
      //arrange
      const testGun = { ...baseGun };
      const result = enhancer.repair(testGun);

      expect(result).not.toBe(testGun);
    });
    it("returns a new item with the durability restored to 100", () => {
      const testShield = { ...baseShield };
      const result = enhancer.repair(testShield);

      expect(result.durability).toBe(100);
    });
  });

  describe("the success function", () => {
    //The item's enhancement increases by 1.
    //If the item enhancement level is 20, the enhancement level is not changed.
    //The durability of the item is not changed.
    it("returns a new item when passed an exisiting item", () => {
      const testGun = { ...baseGun };
      const newGun = enhancer.succeed(testGun);

      expect(newGun).not.toBe(testGun);
    });
    it("returns a new item with the enhancement increrased by 1 if currently less than 20", () => {
      const testMap = { ...baseMap };
      const newMap = enhancer.succeed(testMap);

      expect(newMap.enhancement).toBe(testMap.enhancement + 1);
    });
    it("the item enhancement level is 20, the enhancement level is not changed.", () => {
      const testShield = { ...baseShield };
      const newShield = enhancer.succeed(testShield);

      expect(newShield.enhancement).not.toBeGreaterThan(20);
    });
  });
});
