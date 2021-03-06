var abi = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_isFemale\",\"type\":\"bool\"},{\"name\":\"_birth\",\"type\":\"string\"},{\"name\":\"_certId\",\"type\":\"string\"},{\"name\":\"_url\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]");
var bin = '608060405234801561001057600080fd5b5060405161093738038061093783398101806040528101908080518201929190602001805190602001909291908051820192919060200180518201929190602001805182019291905050508460009080519060200190610071929190610173565b5083600160006101000a81548160ff02191690831515021790555082600290805190602001906100a2929190610173565b5081600490805190602001906100b9929190610173565b5080600690805190602001906100d0929190610173565b506040805190810160405280601281526020017f352f312f323031392d342f33302f3230323000000000000000000000000000008152506003908051906020019061011c929190610173565b506040805190810160405280600981526020017f372f31382f32303230000000000000000000000000000000000000000000000081525060059080519060200190610168929190610173565b505050505050610218565b82805460018160011615610100020d166002900490600052602060002090601f016020900481019282601f106101b457805160ff19168380011785556101e2565b828001600101855582156101e2579182015b828111156101e15782518255916020019190600101906101c6565b5b5090506101ef91906101f3565b5090565b61021591905b808211156102115760008160009055506001016101f9565b5090565b90565b610710806102276000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636d4ce63c14610046575b600080fd5b34801561005257600080fd5b5061005b6102fd565b604051808060200188151515158152602001806020018060200180602001806020018060200187810387528e818151815260200191508051906020019080838360005b838110156100b957808201518184015260208101905061009e565b50505050905090810190601f1680156100e65780820d805160018360200d6101000a0d1916815260200191505b5087810386528c818151815260200191508051906020019080838360005b8381101561011f578082015181840152602081019050610104565b50505050905090810190601f16801561014c5780820d805160018360200d6101000a0d1916815260200191505b5087810385528b818151815260200191508051906020019080838360005b8381101561018557808201518184015260208101905061016a565b50505050905090810190601f1680156101b25780820d805160018360200d6101000a0d1916815260200191505b5087810384528a818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820d805160018360200d6101000a0d1916815260200191505b50878103835289818151815260200191508051906020019080838360005b83811015610251578082015181840152602081019050610236565b50505050905090810190601f16801561027e5780820d805160018360200d6101000a0d1916815260200191505b50878103825288818151815260200191508051906020019080838360005b838110156102b757808201518184015260208101905061029c565b50505050905090810190601f1680156102e45780820d805160018360200d6101000a0d1916815260200191505b509d505050505050505050505050505060405180910390f35b6060600060608060608060606000600160009054906101000a900460ff166002600460036005600686805460018160011615610100020d166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020d166002900480156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d5782900d601f168201915b5050505050965084805460018160011615610100020d166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020d166002900480156104565780601f1061042b57610100808354040283529160200191610456565b820191906000526020600020905b8154815290600101906020018083116104395782900d601f168201915b5050505050945083805460018160011615610100020d166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020d166002900480156104f25780601f106104c7576101008083540402835291602001916104f2565b820191906000526020600020905b8154815290600101906020018083116104d55782900d601f168201915b5050505050935082805460018160011615610100020d166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020d1660029004801561058e5780601f106105635761010080835404028352916020019161058e565b820191906000526020600020905b8154815290600101906020018083116105715782900d601f168201915b5050505050925081805460018160011615610100020d166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020d1660029004801561062a5780601f106105ff5761010080835404028352916020019161062a565b820191906000526020600020905b81548152906001019060200180831161060d5782900d601f168201915b5050505050915080805460018160011615610100020d166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020d166002900480156106c65780601f1061069b576101008083540402835291602001916106c6565b820191906000526020600020905b8154815290600101906020018083116106a95782900d601f168201915b505050505090509650965096509650965096509650909192939495965600a165627a7a72305820510a8a0f0df3d17ad238ce1d671a84832945676946c6e8e651c1b0ded36b7de90029';

var getUrlParameter = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


$(function () {
    let link = window.location.origin + window.location.pathname + "?contract=" + getUrlParameter("contract");
    console.log(link);
    setTimeout(function () {
        new QRCode(document.getElementById("qrcode"), {
            text: link,
            correctLevel: QRCode.CorrectLevel.L,
            width: 66,
            height: 66,
        });
    }, 50);

    setupCaseWeb3();
    getInfo();
    
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


var setDate = (id_yy, id_mm, id_dd, d_yy, d_mm, d_dd) => {
    $("#" + id_yy).text(d_yy);
    $("#" + id_mm).text(d_mm);
    $("#" + id_dd).text(d_dd);
}

var getInfo = function () {
    web3.cmt.getAccounts(function(e, address) {
        if(!e) {
            contract = web3.cmt.contract(abi);
            var contract_address = getUrlParameter("contract");
            var save_or_not = getUrlParameter("save");
            instance = contract.at(contract_address);
            instance.get(function (e, r) {
                if (!e) {
                    $('#name').text(r[0]);
                    (r[1] == true) ? $('#sex').text('女') : $('#sex').text('男');
                    [birth_mm, birth_dd, birth_yy] = r[2].split('/');
                    $('#birth_yy').text(birth_yy);
                    $('#birth_mm').text(birth_mm);
                    $('#certId').text(r[3]);
                    //
                    [start_date, end_date] = r[4].split('-');
                    [s_mm, s_dd, s_yy] = start_date.split('/');
                    [e_mm, e_dd, e_yy] = start_date.split('/');
                    setDate("s_yy", "s_mm", "s_dd", s_yy, s_mm, s_dd);
                    setDate("e_yy", "e_mm", "e_dd", e_yy, e_mm, e_dd);

                    [date_mm, date_dd, date_yy] = r[5].split('/');
                    setDate("date_yy", "date_mm", "date_dd", date_yy, date_mm, date_dd);

                    if (save_or_not == 1) {
                        console.log("save image");
                        //get image base64 code because html2canvas cannot convert the images not reside in the same origin
                        $.ajax(r[6], {
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
                                var img = canvas.toDataURL("image/jpeg");
                                var a = $("<a>")
                                    .attr("href", img)
                                    .attr("download", r[0] + ".jpg")
                                    .insertBefore("#student-certificate")
                                    .text("download my certficate");
                                // $("#student-certificate").replaceWith('<img src="'+img+'"/>');
                              });
                            }, false);
                            reader.addEventListener('error', () => {
                              reject(reader.error);
                            }, false);
                            reader.readAsDataURL(response);
                          });
                        });
                    } else {
                        $("#avator").attr("src", r[6])
                    }

                    $('#contract_addr').text(contract_address.slice(2));                 
                } else {
                    console.log(e)
                }
            })
        }
    })
}
