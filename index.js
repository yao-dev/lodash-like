


expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);




expect(chunk([1,2,3,4,5], 2.5)).toEqual([[1,2],[3,4],[5]]);
expect(chunk([1,2,3,4,5], "2.5")).toEqual([[1,2],[3,4],[5]]);
expect(chunk("12345", "2.5")).toEqual([[1,2],[3,4],[5]]);
// si size >= return unchanged array
