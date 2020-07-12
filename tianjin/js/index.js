var abi = '';
var bin = '';

var getUrlParameter = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


$(function () {
    console.log(window.location.href);
    let link = window.location.href;
    setTimeout(function () {
        new QRCode(document.getElementById("qrcode"), {
            text: link,
            correctLevel: QRCode.CorrectLevel.L,
            width: 66,
            height: 66,
        });
    }, 50);

    setupCaseWeb3();
    getAbi();
    getBin();

    var interval = setInterval(function () {
        if (abi.length > 0) {
            window.onload = getInfo();
            clearInterval(interval);
        }
    }, 50)

    
});

var setupCaseWeb3 = function () {
    try{
        web3.cmt
    }catch(e){
        setWeb3 = false
        var Web3 = require("web3-cmt")
        web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.cybermiles.io:8545"))
    }
}
var getAbi = function () {
    $.ajax({
        url: '../contracts/TianjinStudent.abi',
        sync: true,
        dataType: 'text',
        success: function (data) {
            abi = JSON.parse(data);
        }
    });
}

var getBin = function () {
    $.ajax({
        url: '../contracts/TianjinStudent.bin',
        dataType: 'text',
        sync: true,
        success: function (data) {
            bin = data;
        }
    });
}

var getInfo = function () {
    web3.cmt.getAccounts(function(e, address) {
        if(!e) {
            contract = web3.cmt.contract(abi);
            var contract_address = getUrlParameter("contract");
            instance = contract.at(contract_address);
            instance.get(function (e, r) {
                if (!e) {
                    $('#name').text(r[0]);
                    (r[1] == true) ? $('#sex').text('女') : $('#sex').text('男');
                    [birth_mm, birth_dd, birth_yy] = r[2].split('/');
                    $('#birth_yy').text(birth_yy);
                    $('#birth_mm').text(birth_mm);
                    $('#certId').text(r[3]);
                    [date_mm, date_dd, date_yy] = r[4].split('/');
                    $('#date_yy').text(date_yy);
                    $('#date_mm').text(date_mm);
                    $('#date_dd').text(date_dd);
                    //get image base64 code because html2canvas cannot convert the images not reside in the same origin
                    $.ajax(r[5], {
                      dataType: 'binary',
                      xhr() {
                        let myXhr = jQuery.ajaxSettings.xhr();
                        myXhr.responseType = 'blob';
                        return myXhr;
                      }
                    }).then((response) => {
                      // response is a Blob
                      return new Promise((resolve, reject) => {
                        let reader = new FileReader();
                        reader.addEventListener('load', () => {
                          // reader.result holds a data URL representation of response
                          resolve(reader.result);
                          $("#avator").attr("src", reader.result)
                          //convert certificate to canvas
                          html2canvas(document.querySelector("#student-certificate")).then(canvas => {
                                $("#student-certificate").replaceWith(canvas)
                            });
                        }, false);
                        reader.addEventListener('error', () => {
                          reject(reader.error);
                        }, false);
                        reader.readAsDataURL(response);
                      });
                    });

                    $('#contract_addr').text(contract_address);                 
                } else {
                    console.log(e)
                }
            })
        }
    })
}
