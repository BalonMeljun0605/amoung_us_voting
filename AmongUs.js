let str = "";
let voteCount = {
    Meljun : 0,
    Ene : 0,
    Elsienatics : 0,
    Lexieyatot : 0,
    Chayskie : 0,
    Yanie : 0,
    Jhong : 0,
    Nevets : 0,
    Tinay : 0,
    Adorador : 0
};

$(document).ready(
    function(){
        $("#div1").click(
            function(){
                $("#chosen_ANF").val("Meljun");
				str += "Meljun has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Meljun++;
                $("#p1vote").html(voteCount.Meljun);            
            }
        );

        $("#div2").click(
            function(){
                $("#chosen_ANF").val("Ene");
				str += "Ene has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Ene++;
                $("#p2vote").html(voteCount.Ene);            
            }
        );

        $("#div3").click(
            function(){
                $("#chosen_ANF").val("Elsienatics");
				str += "Elsienatics has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Elsienatics++;
                $("#p3vote").html(voteCount.Elsienatics);            
            }
        );

        $("#div4").click(
            function(){
                $("#chosen_ANF").val("Lexieyatot");
				str += "Lexieyatot has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Lexieyatot++;
                $("#p4vote").html(voteCount.Lexieyatot);            
            }
        );

        $("#div5").click(
            function(){
                $("#chosen_ANF").val("Chayskie");
				str += "Chayskie has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Chayskie++;
                $("#p5vote").html(voteCount.Chayskie);            
            }
        );

        $("#div6").click(
            function(){
                $("#chosen_ANF").val("Yanie");
				str += "Yanie has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Yanie++;
                $("#p6vote").html(voteCount.Yanie);            
            }
        );

        $("#div7").click(
            function(){
                $("#chosen_ANF").val("Jhong");
				str += "Jhong has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Jhong++;
                $("#p7vote").html(voteCount.Jhong);            
            }
        );

        $("#div8").click(
            function(){
                $("#chosen_ANF").val("Nevets");
				str += "Nevets has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Nevets++;
                $("#p8vote").html(voteCount.Nevets);            
            }
        );

        $("#div9").click(
            function(){
                $("#chosen_ANF").val("Tinay");
				str += "Tinay has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Tinay++;
                $("#p9vote").html(voteCount.Tinay);            
            }
        );

        $("#div10").click(
            function(){
                $("#chosen_ANF").val("Adorador");
				str += "Adorador has been voted.\n";
                $("#vote_logs").text(str);
                voteCount.Adorador++;
                $("#p10vote").html(voteCount.Adorador);            
            }
        );
    }
)

