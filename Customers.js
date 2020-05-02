const Customers = {
    getContent() {
        return fetch('http://localhost:5000/',{
            headers:{
                "Content-type": "application/json"
            }
        }).then(res=>{
            return res.json();
        }).then(jsonResponse =>{
            return jsonResponse;
        });
    }
};

export default Customers;