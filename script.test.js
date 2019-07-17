const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

describe("Groupd test case: Google search", ()=> {

  it("this is a test", () => {
    expect(googleSearch('test', dbMock))
      .toEqual([])
  });
  
})
