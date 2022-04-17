const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Kiran",
          last: "V",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        login: {
          uuid: "eerer",
          username: "kv",
        },
      },
    ],
  },
};

const mockedAxios = {
  get: function (url) {
    switch (url) {
      case "https://randomuser.me/api/?results=5":
        return jest.fn().mockResolvedValue(mockResponse)();
      default:
        return {};
    }
  },
};

export default mockedAxios;
