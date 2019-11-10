const LevelAdaptor = require("../js/adaptor");
const GameLevels = require("../js/levels");

describe("Transform 3rd edition level format to 2nd edition format", ()=>{
    it('should split string in to 2 elements', ()=>{
      let str = "element 1\nelement 2";
      let arr = LevelAdaptor.convertPlan(str);
      expect(arr[0]).toBe("element 1");
      expect(arr[1]).toBe("element 2");
    })

    it('should replace + with !', ()=>{
        let str='+++';
        let testStr = '!!!'
        let rtn = LevelAdaptor.convertPlan(str);
        expect(rtn[0]).toBe(testStr);
        expect(rtn[0].length).toEqual(testStr.length);
    })
    it('should replace . with space', ()=>{
        let str = "....";
        let teststr = "    "; // 4 spaces
        let rtn = LevelAdaptor.convertPlan(str);
        expect(rtn[0]).toBe(teststr);
        expect(rtn[0].length).toEqual(teststr.length);
    })

    it('should replace . + and split on new line', function () {
        let str = '++one..two++\n++  ++';
        let arr = LevelAdaptor.convertPlan(str);
        expect(arr[0]).toBe('!!one  two!!');
        expect(arr[1]).toBe('!!  !!');
    });
    it('should have array elements of equal length', function () {
        let arr = LevelAdaptor.convertPlan(GameLevels[0]);
        let sum = 0;
        for(let i = 0; i < (arr.length -1); i++){
            sum += (arr[i].length - arr[i+1].length);
        }
        // console.log(arr);
        expect(sum).toBe(0);
    });
})