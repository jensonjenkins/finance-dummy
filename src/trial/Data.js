import Axios from "axios"

const MainD = () => {
    const UserData= [];
    const getVal = () => {
        Axios.get('https://api.twelvedata.com/time_series?apikey=2ff55c0bf8614eb5a7bc3f68cee19b31&interval=1min&format=JSON&symbol=AAPL').then((response) => {
            for (let i = 0; i <= 29; i++) {
                UserData.push(response.data.values[i].open);
            }
        })
        console.log(UserData);
    }
}

export let UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];