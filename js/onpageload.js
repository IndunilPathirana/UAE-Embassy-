$(document).ready(function () {
  var langnum = 0;

  //   alert("hello");
  $("#firstrow").hide();
  $("#thirdrow").hide();
  $("#registerbtn").hide();
  $("#successicon").hide();
  $("#unsuccessicon").hide();

  // lang button click

  $("#sinhalaemb").click(function () {
    langnum = 0;
    // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
    // $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');
    $("#title").html(' <h2 class="title">ආයුබෝවන්!</h2>');
    $("#welcomemsgpra").text(
      "එක්සත් අරාබි එමීර් රාජ්‍යයේ ශ්‍රී ලාංකා තනාපති කාර්යාලය විසින් ක්‍රියාත්මක, ශ්‍රී ලාංකිකයන් නැවත මව්බිමට ගෙන්වා ගැනීම සඳහා වන ලියාපදිංචිය තහවුරු කරදීමේ ක්ෂණික නිල සේවාව සඳහා ඔබව ගෞරවයෙන් පිළිගනිමු!"
    );

    $("#passportLabel").text("කරුණාකර ඔබගේ ගුවන් බලපත්‍ර අංකය යොදන්න.");
  });
  $("#englishemb").click(function () {
    langnum = 1;
    // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
    // $("#title").html(' <h2 class="title"> Registration Info</h2>');
    $("#title").html(' <h2 class="title"> Welcome !</h2>');
    $("#welcomemsgpra").text(
      "We welcome you to the repartiation registration status checking platform of Sri Lankan Embassy in the United Arab Emirates!"
    );

    $("#passportLabel").text(
      "You are kindly requested to enter your passport number to check the status."
    );
  });
  $("#tamilemb").click(function () {
    langnum = 2;

    //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
    // $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');

    $("#title").html(' <h2 class="title"> வரவேற்பு !</h2>');
    $("#welcomemsgpra").text(
      "ஐக்கிய அரபு எமிரேட்ஸ் இலங்கை தூதரகத்திற்கு உங்களை வரவேற்கிறது."
    );

    $("#passportLabel").text(
      "நிலையைச் சரிபார்க்க உங்கள் பாஸ்போர்ட் எண்ணை உள்ளிடுமாறு கேட்டுக்கொள்ளப்படுகிறீர்கள்."
    );
  });

  $("#getDataButton").click(function () {
    //get the user enterd passport number
    passportNumber = $("#passportNO").val();

    // $("#secondrow").hide();
    getUserData(langnum);
    if (langnum == 0) {
      $("#Reginfo").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');
      $("#passportLabel").text("ඔබගේ ගමන් බලපත්‍ර අංකය");
    } else if (langnum == 1) {
      $("#Reginfo").html(' <h2 class="title"> Registration Info</h2>');
      $("#passportLabel").text("Your Passport Number");
    } else if (langnum == 2) {
      $("#Reginfo").html(' <h2 class="title"> பதிவு தகவல்</h2>');
      $("#passportLabel").text("உங்கள் பாஸ்போர்ட் எண்");
    }
  });

  // Handler for .ready() called.
  $("html, body").animate(
    {
      scrollTop: $("#pgeloadfn").offset().top,
    },
    "slow"
  );
});

var rootURL =
  "https://embassyofsrilankauae.com/wp-json/cfdb7/json/search/jzeZemHYQUu3zLsfPHp8s5tzxjHHfR/8118/passport-no/";
var passportNumber;

// variables to store JSON Data

var firstName = "Indunil";
var registerdDate;

function getUserData(langnum) {
  var URL = rootURL.concat(passportNumber);
  //   alert(URL);
  $.ajax({
    url: URL,
    error: function () {
      // will fire when timeout is reached
      alert("Time Out");
    },
    success: function (data, status) {
      //do something

      if (data.meg && data.meg == "No data exist") {
        // $("#first_name").val("No First Name Data");
        // $("#last_name").val("No Last Name Data");
        // $("#reg_date").val("No Reg Date Data");
        // $("#statusmsg").val(
        //   "We don't have data about you. You may have not registerd"
        // );

        // $("#Register").fadeIn("slow");

        $("#successicon").hide();
        $("#unsuccessicon").show();

        // show the registation btn

        $("#registerbtn").show();
        $("#getDataButton").hide();

        // hide the req firlds

        $("#firstrow").hide();
        $("#thirdrow").hide();

        $("#passportNO").change(function () {
          $("#getDataButton").show();
        });

        if (langnum == 0) {
          $("#statusmsg").text(
            "කනගාටුයි! ඔබගේ ලියාපදිංචිය තහවුරු කළ නොහැක. කරුණාකර ලියාපදිංචිය සඳහා පහත සඳහන් යොමුවට පිවිසෙන්න."
          );
        } else if (langnum == 1) {
          $("#statusmsg").text(
            "Sorry! Your registration could not be verified. Kindly visit the link below to register."
          );
        } else if (langnum == 2) {
          $("#statusmsg").val(
            "மன்னிக்கவும், உங்களைப் பற்றிய தரவு எங்களிடம் இல்லை"
          );
        }

        $("#sinhalaemb").click(function () {
          // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
          $("#Reginfo").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

          $("#statusmsg").text(
            "කනගාටුයි! ඔබගේ ලියාපදිංචිය තහවුරු කළ නොහැක. කරුණාකර ලියාපදිංචිය සඳහා පහත සඳහන් යොමුවට පිවිසෙන්න."
          );

          $("#passportLabel").text("ඔබගේ ගමන් බලපත්‍ර අංකය");
        });
        $("#englishemb").click(function () {
          // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
          $("#Reginfo").html(' <h2 class="title"> Registration Info</h2>');

          $("#statusmsg").text(
            "Sorry! Your registration could not be verified. Kindly visit the link below to register."
          );

          $("#passportLabel").text("Your Passport Number");
        });
        $("#tamilemb").click(function () {
          //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
          $("#Reginfo").html(' <h2 class="title"> பதிவு தகவல்</h2>');

          $("#statusmsg").text(
            "மன்னிக்கவும்! உங்கள் பதிவை சரிபார்க்க முடியவில்லை. பதிவு செய்ய தயவுசெய்து கீழேயுள்ள இணைப்பைப் பார்வையிடவும்."
          );
          $("#passportLabel").text("உங்கள் பாஸ்போர்ட் எண்");
        });

        // // Get the modal
        // var modal = document.getElementById("myModal");

        // //display the model
        // modal.style.display = "block";

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //   if (event.target == modal) {
        //     location.reload();
        //     modal.style.display = "none";
        //   }
        // };
      } else {
        // assign variables

        $("#successicon").show();
        $("#unsuccessicon").hide();

        $("#firstrow").show();
        $("#thirdrow").show();
        $("#registerbtn").hide();

        var regDate = data.form_date;
        // spliting reg date and time

        var dayarray = regDate.split(" ");
        // alert(dayarray[1]);
        var firstName = data.your_name;
        var lastName = data.your_surname;

        // assign values to html
        $("#first_name").val(firstName);
        $("#last_name").val(lastName);
        $("#reg_date").val(dayarray[0]);
        $("#reg_time").val(dayarray[1]);

        if (langnum == 0) {
          $("#statusmsg").text(
            "ඔබගේ ලියාපදිංචිය තහවුරු කර ඇති බව සතුටින් දන්වා සිටිමු.ලියාපදිංචි ප්‍රමුඛත්ව අනුක්‍රමණිකාවන් සහ ගුවන්යානා සැපයීම් ලේඛනයන්ට අනුව, අප තානාපති කාර්යාල නිලධාරියකු හැකි ඉක්මනින් ඔබ හා සම්බන්ධ වනු ඇත. ස්තුතියි!"
          );
          $("#firstnmelbl").text("ඔබගේ මුල් නම");
          $("#lastnmelbl").text("ඔබගේ අග නම  ");
          $("#regdtelbl").text(" ඔබ ලියාපදිංචි දිනය");
          $("#regtimelbl").text("ලියාපදිංචි වේලාව");
        } else if (langnum == 1) {
          $("#statusmsg").text(
            "We are pleased to announce that your registration has been confirmed. According to the priority based registration sequences and flights availability, an embassy official will contact you at the soonest. Thank you!"
          );

          $("#firstnmelbl").text("First Name");
          $("#lastnmelbl").text("Surname");
          $("#regdtelbl").text("Registation Date");
          $("#regtimelbl").text("Registation Time");
        } else if (langnum == 2) {
          $("#statusmsg").val(
            "உங்கள் பதிவு உறுதிப்படுத்தப்பட்டுள்ளதாக அறிவிப்பதில் நாங்கள் மகிழ்ச்சியடைகிறோம். முன்னுரிமை அடிப்படையிலான  பதிவுகள் மற்றும் விமானங்கள் கிடைப்பதன் அடிப்படையில், தூதரக அதிகாரி ஒருவர் விரைவில் உங்களைத் தொடர்புகொள்வார். நன்றி"
          );

          $("#firstnmelbl").text("முதல் பெயர்");
          $("#lastnmelbl").text("குடும்ப பெயர்");
          $("#regdtelbl").text("பதிவு தேதி");
          $("#regtimelbl").text("பதிவு நேரம்");
        }

        $("#sinhalaemb").click(function () {
          // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
          $("#Reginfo").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

          $("#statusmsg").text(
            "ඔබගේ ලියාපදිංචිය තහවුරු කර ඇති බව සතුටින් දන්වා සිටිමු.ලියාපදිංචි ප්‍රමුඛත්ව අනුක්‍රමණිකාවන් සහ ගුවන්යානා සැපයීම් ලේඛනයන්ට අනුව, අප තානාපති කාර්යාල නිලධාරියකු හැකි ඉක්මනින් ඔබ හා සම්බන්ධ වනු ඇත. ස්තුතියි!"
          );
          $("#passportLabel").text("ඔබගේ ගමන් බලපත්‍ර අංකය");

          $("#firstnmelbl").text("ඔබගේ මුල් නම");
          $("#lastnmelbl").text("ඔබගේ අග නම  ");
          $("#regdtelbl").text(" ඔබ ලියාපදිංචි දිනය");
          $("#regtimelbl").text("ලියාපදිංචි වේලාව");
        });
        $("#englishemb").click(function () {
          // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
          $("#Reginfo").html(' <h2 class="title"> Registration Info</h2>');

          $("#statusmsg").text(
            "We are pleased to announce that your registration has been confirmed. According to the priority based registration sequences and flights availability, an embassy official will contact you at the soonest. Thank you!"
          );
          $("#passportLabel").text("Your Passport Number");

          $("#firstnmelbl").text("First Name");
          $("#lastnmelbl").text("Surname");
          $("#regdtelbl").text("Registation Date");
          $("#regtimelbl").text("Registation Time");
        });
        $("#tamilemb").click(function () {
          //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
          $("#Reginfo").html(' <h2 class="title"> பதிவு தகவல்</h2>');

          $("#statusmsg").text(
            "உங்கள் பதிவு உறுதிப்படுத்தப்பட்டுள்ளதாக அறிவிப்பதில் நாங்கள் மகிழ்ச்சியடைகிறோம். முன்னுரிமை அடிப்படையிலான  பதிவுகள் மற்றும் விமானங்கள் கிடைப்பதன் அடிப்படையில், தூதரக அதிகாரி ஒருவர் விரைவில் உங்களைத் தொடர்புகொள்வார். நன்றி"
          );

          $("#passportLabel").text("உங்கள் பாஸ்போர்ட் எண்");

          $("#firstnmelbl").text("முதல் பெயர்");
          $("#lastnmelbl").text("குடும்ப பெயர்");
          $("#regdtelbl").text("பதிவு தேதி");
          $("#regtimelbl").text("பதிவு நேரம்");
        });
      }
    },
    timeout: 6000, // sets timeout to 6 seconds
  });
}
