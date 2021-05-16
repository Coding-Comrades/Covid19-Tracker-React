import axios from 'axios';

const Searchbypinapi = (pincode) => {
    
    var today = new Date();
    var date = today.toJSON().slice(0, 10);
    var nDate = date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);
    let pincodeconfig = {
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=' + pincode +'&date=' + nDate ,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'hi_IN',
            'User-Agent': 'hvs42'
        }
      };
      axios(pincodeconfig)
          .then((response) => {
            return(response.data);
          })
          .catch(error => {
              return error;
          });

      
      
};

export default Searchbypinapi;

