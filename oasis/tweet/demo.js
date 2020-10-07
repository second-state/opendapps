/* Don't modify */
var abi = [];
var bytecode = '';
var cAddr = '';
/* Don't modify */

var instance = null;
window.addEventListener('web3Ready', function() {
  var contract = web3.ss.contract(abi);
  instance = contract.at(cAddr);
  reload();
});

var price = "0"; // This is in the unit of OETH. e.g., 0.01

function reload() {
    instance.message(function (e, r) {
        $("#message").html(r);
    });
    instance.image(function (e, r) {
        $("#image").prop("src", r);
    });
    instance.price(function (e, r) {
        price = r;
        $("#pricealert").html("Requires " + price + " wei to comment");
    });
    
    $("#formSubmitted").css("display", "none");
    web3.ss.getAccounts(function (e, address) {
        if (!e) {
            var balance = web3.ss.getBalance(address[0]);
            $("#balance").html("You have " + balance + " wei OETH in your current account. ");

            var comments = "";
            instance.getAddrs(function (ee, addrs) {
                addrs.forEach(function(addr) {
                    instance.getComment(addr, function (ee, r) {
                        if (!ee) {
                            comments = comments + "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>";
                            $("#comments").html(comments);
                        }
                    });
                });
            });
            $("#comments").html(comments);
        }
    });
}

$("#submit").click(function() {
    if ((!$("#name").val().trim()) || (!$("#comment").val().trim())) {
      alert("Please enter both a name and a comment");
      return false;
    }
    web3.ss.getAccounts(function (e, address) {
        if (!e) {
            $("#form").css("display", "none");
            $("#formSubmitted").css("display", "block");
            instance.addComment ($("#name").val(), $("#comment").val(), {
                value: price,
                gas: 499000,
                gasPrice: 1
            }, function (ee, r) {
                if (ee) {
                    window.alert("You need to pay " + price + " OETH to comment. Make sure that you have it in your address.");
                }
            });
            setTimeout(function () {
                reload ();
            }, 10 * 1000);
        }
    });
    return false;
});
