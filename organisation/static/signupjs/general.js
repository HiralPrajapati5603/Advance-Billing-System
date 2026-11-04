function number2text(value) {	    var fraction = Math.round(frac(value)*100);    var f_text  = "";    if(fraction > 0) {        f_text = "AND "+convert_number(fraction)+" PAISA";    }    return convert_number(value)+" RUPEES "+f_text+" ONLY";}function frac(f) {    return (f % Math.floor(f));	}function convert_number(number){    if ((number < 0) || (number > 999999999))     {         return "NUMBER OUT OF RANGE!";    }    var Gn = Math.floor(number / 10000000);  /* Crore */     number -= Gn * 10000000;     var kn = Math.floor(number / 100000);     /* lakhs */     number -= kn * 100000;     var Hn = Math.floor(number / 1000);      /* thousand */     number -= Hn * 1000;     var Dn = Math.floor(number / 100);       /* Tens (deca) */     number = number % 100;               /* Ones */     var tn= Math.floor(number / 10);     var one=Math.floor(number % 10);     var res = "";     if (Gn>0)     {         res += (convert_number(Gn) + " CRORE");     }     if (kn>0)     {             res += (((res=="") ? "" : " ") +             convert_number(kn) + " LAKH");     }     if (Hn>0)     {         res += (((res=="") ? "" : " ") +            convert_number(Hn) + " THOUSAND");     }     if (Dn)     {         res += (((res=="") ? "" : " ") +             convert_number(Dn) + " HUNDRED");     }     var ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX","SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN","FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN","NINETEEN"); var tens = Array("", "", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY","SEVENTY", "EIGHTY", "NINETY");     if (tn>0 || one>0)     {         if (!(res==""))         {             res += " AND ";         }         if (tn < 2)         {             res += ones[tn * 10 + one];         }         else         {             res += tens[tn];            if (one>0)             {                 res += ("-" + ones[one]);             }         }     }    if (res=="")    {         res = "ZERO";     }     return res;}
function allowOnlyNumber(evt){

	try {

		var charCode = (evt.which) ? evt.which : event.keyCode

		if ((charCode != 46 || $(this).val().indexOf('.') != -1) && (charCode < 48 || charCode > 57)&&charCode!=8&&charCode!=45) {

			alert("Only Numeric Input Is Allowed");

			return false;

		} 

		else{

			return true;

		}

	}

	catch(err){

	}
}

function selectall()
{
	
	if(document.tabledata.del.checked==true)
	{
		var chks = document.getElementsByName('delall[]');
		
		for(i=0;i<chks.length;i++)
		{
			chks[i].checked=true;
		}
	}
	else if(document.tabledata.del.checked==false)
	{
		var chks = document.getElementsByName('delall[]');
		
		for(i=0;i<chks.length;i++)
		{
			chks[i].checked=false;
		}
	}
}


function IsNumber(a)
{
	var reg = /^\d+$/;
	if(reg.test(a))
	{
	return true;
	}
	else{return false;}
}


var handles = ["Select State","Andaman and Nicobar","Andhra Pradesh","Andhra Pradesh (New)","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep Islands","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Puducherry","Punjab", "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
var handlesCodes = [""," ( 35 )"," ( 28 )"," ( 37 )"," ( 12 )"," ( 18 )"," ( 10 )"," ( 04 )"," ( 22 )"," ( 26 )"," ( 25 )"," ( 07 )"," ( 30 )"," ( 24 )"," ( 06 )"," ( 02 )"," ( 01 )"," ( 20 )"," ( 29 )"," ( 32 )"," ( 31 )"," ( 23 )"," ( 27 )"," ( 14 )"," ( 17 )"," ( 15 )"," ( 13 )"," ( 21 )"," ( 34 )"," ( 03 )"," ( 08 )"," ( 11 )"," ( 33 )"," ( 36 )"," ( 16 )"," ( 09 )"," ( 05 )"," ( 19 )"];

$(function() {
  var options = '';
  for (var i = 0; i < handles.length; i++) {  if(handles[i] == "Select State")  {	options += '<option value="">' + handles[i] + '</option>';  }  else  {	options += '<option value="' + handles[i] + '">' + handles[i] +handlesCodes[i]+ '</option>';  }
      
  }
  $('#listBox').html(options);
try {
	$('#listBox1').html(options);
	/* Edit Time Set State Selected Code */
	if($('#listBox1[data-value]').length>0)
	{
		if($('#listBox1').attr("data-value") != "")
		{
			$('#listBox1').val($('#listBox1').attr("data-value"));
			selct_district($('#listBox1').attr("data-value"));
		}
		
	}
}
catch(err) {

}
try {
	$('#listBox2').html(options);
	/* Edit Time Set State Selected Code */
	if($('#listBox2[data-value]').length>0)
	{
		if($('#listBox2').attr("data-value") != "")
		{
			$('#listBox2').val($('#listBox2').attr("data-value"));
			selct_district($('#listBox2').attr("data-value"));
		}
		
	}
}
catch(err) {

}

  
  selct_district($('#listBox').val());
  
	/* Edit Time Set State Selected Code */
	if($('#listBox[data-value]').length>0)
	{
		if($('#listBox').attr("data-value") != "")
		{
			$('#listBox').val($('#listBox').attr("data-value"));
			selct_district($('#listBox').attr("data-value"));
		}
		
	}
	
	
	/* Edit Time Set City Selected Code */
	if($('#secondlist[data-value]').length>0)
	{
		if($('#secondlist').attr("data-value") != "")
		{
			setTimeout(function(){
				$('#secondlist').val($('#secondlist').attr("data-value"));
			},100);
		}
	}
  
});


var handlescon = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhtan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic (CAR)","Chad","Chile","China","Colombia","Comoros","Democratic Republic of the Congo","Republic of the Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","DominicanRepublic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","uinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","azakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxemborg","Macedonia (FYROM)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincentand the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidadad Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates (UAE)","United Kingdom (UK)","United States of America (USA)","Uruguay","Uzbekistan","Vanuatu","Vatican City (Holy See)","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

$(function() {
  var options = '';
  for (var i = 0; i < handlescon.length; i++) {  if(handlescon[i] == "Select State")  {	options += '<option value="">' + handlescon[i] + '</option>';  }  else  {	options += '<option value="' + handlescon[i] + '">' + handlescon[i] + '</option>';  }
      
  }
  $('#listBoxCountry').html(options);
  selct_district($('#listBoxCountry').val());
  
	/* Edit Time Set State Selected Code */
	if($('#listBoxCountry[data-value]').length>0)
	{
		if($('#listBoxCountry').attr("data-value") != "")
		{
			$('#listBoxCountry').val($('#listBoxCountry').attr("data-value"));
			selct_district($('#listBoxCountry').attr("data-value"));
		}
		
	}
	
});

function selct_country($val)
{
	if($val == 'India') {
		$('#listBox').show(); 
		$('#newState').hide();
		$('#listBox').attr("name","state"); 
		$('#newState').attr("name","statex"); 
	}
	else{
		$('#listBox').hide(); 
		$('#newState').show();
		$('#listBox').attr("name","statex"); 
		$('#newState').attr("name","state"); 
	}
}

function selct_district($val)
{
    if($val=='Select State') {
	var andhra = ["Select City"];
   $(function() {
  var options = '';
  for (var i = 0; i < andhra.length; i++) {
      options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  
  }
 if($val=='Andhra Pradesh') {
   var andhra = ["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","Srikakulam","SriPotti Sri Ramulu Nellore",
                                    "Vishakhapatnam","Vizianagaram","West Godavari","Cudappah"];
   $(function() {
  var options = '';
  for (var i = 0; i < andhra.length; i++) {
      options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Arunachal Pradesh') {
    var ap = ["Anjaw","Changlang","Dibang Valley","East Siang","East Kameng","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Papum Pare",
                                        "Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"];
   $(function() {
  var options = '';
  for (var i = 0; i < ap.length; i++) {
      options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Assam') {
    var assam = ["Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dima Hasao","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Jorhat",
                                     "Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","Tinsukia","Udalguri"];
   $(function() {
  var options = '';
  for (var i = 0; i < assam.length; i++) {
      options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Bihar') {
    var bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur",
                                        "Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa",
                                        "Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
   $(function() {
  var options = '';
  for (var i = 0; i < bihar.length; i++) {
      options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Chhattisgarh') {
    var Chhattisgarh = ["Bastar","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Jashpur","Janjgir-Champa","Korba","Koriya","Kanker","Kabirdham (formerly Kawardha)","Mahasamund",
                                            "Narayanpur","Raigarh","Rajnandgaon","Raipur","Surajpur","Surguja"];
   $(function() {
  var options = '';
  for (var i = 0; i < Chhattisgarh.length; i++) {
      options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Dadra and Nagar Haveli') {
    var dadra = ["Amal","Silvassa"];
   $(function() {
  var options = '';
  for (var i = 0; i < dadra.length; i++) {
      options += '<option value="' + dadra[i] + '">' + dadra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Daman and Diu') {
    var daman = ["Daman","Diu"];
   $(function() {
  var options = '';
  for (var i = 0; i < daman.length; i++) {
      options += '<option value="' + daman[i] + '">' + daman[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Delhi') {
    var delhi = ["Delhi","New Delhi","North Delhi","Noida","Patparganj","Sonabarsa","Tughlakabad"];
   $(function() {
  var options = '';
  for (var i = 0; i < delhi.length; i++) {
      options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Goa') {
    var goa = ["Chapora","Dabolim","Madgaon","Marmugao (Marmagao)","Panaji Port","Panjim","Pellet Plant Jetty/Shiroda","Talpona","Vasco da Gama"];
   $(function() {
  var options = '';
  for (var i = 0; i < goa.length; i++) {
      options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Gujarat') {
    var gujarat = ["Ahmedabad","Amreli district","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Dahod","Dang","Gandhinagar","Jamnagar","Junagadh",
                                        "Kutch","Kheda","Mehsana","Narmada","Navsari","Patan","Panchmahal","Porbandar","Rajkot","Sabarkantha","Surendranagar","Surat","Tapi","Vadodara","Valsad"];
   $(function() {
  var options = '';
  for (var i = 0; i < gujarat.length; i++) {
      options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Haryana') {
    var haryana = ["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hissar","Jhajjar","Jind","Karnal","Kaithal",
                                            "Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar"];
   $(function() {
  var options = '';
  for (var i = 0; i < haryana.length; i++) {
      options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Himachal Pradesh') {
    var himachal = ["Baddi","Baitalpur","Chamba","Dharamsala","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul & Spiti","Mandi","Simla","Sirmaur","Solan","Una"];
   $(function() {
  var options = '';
  for (var i = 0; i < himachal.length; i++) {
      options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Jammu and Kashmir') {
    var jammu = ["Jammu","Leh","Rajouri","Srinagar"];
   $(function() {
  var options = '';
  for (var i = 0; i < jammu.length; i++) {
      options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Jharkhand') {
    var jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu",
                                            "Ramgarh","Ranchi","Sahibganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
   $(function() {
  var options = '';
  for (var i = 0; i < jharkhand.length; i++) {
      options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Karnataka') {
    var karnataka = ["Bagalkot","Bangalore","Bangalore Urban","Belgaum","Bellary","Bidar","Bijapur","Chamarajnagar", "Chikkamagaluru","Chikkaballapur",
                                           "Chitradurga","Davanagere","Dharwad","Dakshina Kannada","Gadag","Gulbarga","Hassan","Haveri district","Kodagu",
                                           "Kolar","Koppal","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Uttara Kannada","Ramanagara","Yadgir"];
   $(function() {
  var options = '';
  for (var i = 0; i < karnataka.length; i++) {
      options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Kerala') {
    var kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thrissur","Thiruvananthapuram","Wayanad"];
   $(function() {
  var options = '';
  for (var i = 0; i < kerala.length; i++) {
      options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Madhya Pradesh') {
    var mp = ["Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhilai","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Dewas","Dhar","Guna","Gwalior","Hoshangabad",
                                    "Indore","Itarsi","Jabalpur","Khajuraho","Khandwa","Khargone","Malanpur","Malanpuri (Gwalior)","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Pithampur","Raipur","Raisen","Ratlam",
                                    "Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Singrauli","Ujjain"];
   $(function() {
  var options = '';
  for (var i = 0; i < mp.length; i++) {
      options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Maharashtra') {
    var maharashtra = ["Ahmednagar","Akola","Alibag","Amaravati","Arnala","Aurangabad","Aurangabad","Bandra","Bassain","Belapur","Bhiwandi","Bhusaval","Borliai-Mandla","Chandrapur","Dahanu","Daulatabad","Dighi (Pune)","Dombivali","Goa","Jaitapur","Jalgaon",
                                             "Jawaharlal Nehru (Nhava Sheva)","Kalyan","Karanja","Kelwa","Khopoli","Kolhapur","Lonavale","Malegaon","Malwan","Manori",
                                             "Mira Bhayandar","Miraj","Mumbai (ex Bombay)","Murad","Nagapur","Nagpur","Nalasopara","Nanded","Nandgaon","Nasik","Navi Mumbai","Nhave","Osmanabad","Palghar",
                                             "Panvel","Pimpri","Pune","Ratnagiri","Sholapur","Shrirampur","Shriwardhan","Tarapur","Thana","Thane","Trombay","Varsova","Vengurla","Virar","Wada"];
   $(function() {
  var options = '';
  for (var i = 0; i < maharashtra.length; i++) {
      options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='Manipur') {
    var manipur = ["Bishnupur","Churachandpur","Chandel","Imphal East","Senapati","Tamenglong","Thoubal","Ukhrul","Imphal West"];
   $(function() {
  var options = '';
  for (var i = 0; i < manipur.length; i++) {
      options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='Meghalaya') {
    var meghalaya = ["Baghamara","Balet","Barsora","Bolanganj","Dalu","Dawki","Ghasuapara","Mahendraganj","Moreh","Ryngku","Shella Bazar","Shillong"];
   $(function() {
  var options = '';
  for (var i = 0; i < meghalaya.length; i++) {
      options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='Mizoram') {
    var mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
   $(function() {
  var options = '';
  for (var i = 0; i < mizoram.length; i++) {
      options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
   if ($val=='Nagaland') {
    var nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
   $(function() {
  var options = '';
  for (var i = 0; i < nagaland.length; i++) {
      options += '<option value="' + nagaland[i] + '">' + nagaland[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Orissa') {
    var orissa = ["Bahabal Pur","Bhubaneswar","Chandbali","Gopalpur","Jeypore","Paradip Garh","Puri","Rourkela"];
   $(function() {
  var options = '';
  for (var i = 0; i < orissa.length; i++) {
      options += '<option value="' + orissa[i] + '">' + orissa[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Puducherry') {
    var puducherry = ["Karaikal","Mahe","Pondicherry","Yanam"];
   $(function() {
  var options = '';
  for (var i = 0; i < puducherry.length; i++) {
      options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Punjab') {
    var punjab = ["Amritsar","Barnala","Bathinda","Firozpur","Faridkot","Fatehgarh Sahib","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Sri Muktsar Sahib","Pathankot",
                                        "Patiala","Rupnagar","Ajitgarh (Mohali)","Sangrur","Shahid Bhagat Singh Nagar","Tarn Taran"];
   $(function() {
  var options = '';
  for (var i = 0; i < punjab.length; i++) {
      options += '<option value="' + punjab[i] + '">' + punjab[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Rajasthan') {
    var rajasthan = ["Ajmer","Banswara","Barmer","Barmer Rail Station","Basni","Beawar","Bharatpur","Bhilwara","Bhiwadi","Bikaner","Bongaigaon","Boranada, Jodhpur","Chittaurgarh","Fazilka","Ganganagar","Jaipur","Jaipur-Kanakpura",
                                       "Jaipur-Sitapura","Jaisalmer","Jodhpur","Jodhpur-Bhagat Ki Kothi","Jodhpur-Thar","Kardhan","Kota","Munabao Rail Station","Nagaur","Rajsamand","Sawaimadhopur","Shahdol","Shimoga","Tonk","Udaipur"];
   $(function() {
  var options = '';
  for (var i = 0; i < rajasthan.length; i++) {
      options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  if ($val=='Sikkim') {
    var sikkim = ["Chamurci","Gangtok"];
   $(function() {
  var options = '';
  for (var i = 0; i < sikkim.length; i++) {
      options += '<option value="' + sikkim[i] + '">' + sikkim[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Tamil Nadu') {
    var tn = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mandapam","Nagapattinam","Nilgiris","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Thiruvallur","Tirupur",
                                   "Tiruchirapalli","Theni","Tirunelveli","Thanjavur","Thoothukudi","Tiruvallur","Tiruvannamalai","Vellore","Villupuram","Viruthunagar"];
   $(function() {
  var options = '';
  for (var i = 0; i < tn.length; i++) {
      options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Telangana') {
    var telangana = ["Adilabad","Hyderabad","Karimnagar","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ranga Reddy","Warangal"];
   $(function() {
  var options = '';
  for (var i = 0; i < telangana.length; i++) {
      options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Tripura') {
    var tripura = ["Agartala","Dhalaighat","Kailashahar","Kamalpur","Kanchanpur","Kel Sahar Subdivision","Khowai","Khowaighat","Mahurighat","Old Raghna Bazar","Sabroom","Srimantapur"];
   $(function() {
  var options = '';
  for (var i = 0; i < tripura.length; i++) {
      options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Uttar Pradesh') {
    var up = ["Agra","Allahabad","Auraiya","Banbasa","Bareilly","Berhni","Bhadohi","Dadri","Dharchula","Gandhar","Gauriphanta","Ghaziabad","Gorakhpur","Gunji",
                                    "Jarwa","Jhulaghat (Pithoragarh)","Kanpur","Katarniyaghat","Khunwa","Loni","Lucknow","Meerut","Moradabad","Muzaffarnagar","Nepalgunj Road","Pakwara (Moradabad)",
                                    "Pantnagar","Saharanpur","Sonauli","Surajpur","Tikonia","Varanasi"];
   $(function() {
  var options = '';
  for (var i = 0; i < up.length; i++) {
      options += '<option value="' + up[i] + '">' + up[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='Uttarakhand') {
    var uttarakhand = ["Almora","Badrinath","Bangla","Barkot","Bazpur","Chamoli","Chopra","Dehra Dun","Dwarahat","Garhwal","Haldwani","Hardwar","Haridwar","Jamal","Jwalapur","Kalsi","Kashipur","Mall",
                                           "Mussoorie","Nahar","Naini","Pantnagar","Pauri","Pithoragarh","Rameshwar","Rishikesh","Rohni","Roorkee","Sama","Saur"];
   $(function() {
  var options = '';
  for (var i = 0; i < uttarakhand.length; i++) {
      options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
  
  if ($val=='West Bengal') {
    var wb = ["Alipurduar","Bankura","Bardhaman","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah",
                                    "Jalpaiguri","Kolkata","Maldah","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
   $(function() {
  var options = '';
  for (var i = 0; i < wb.length; i++) {
      options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
  }
  $('#secondlist').html(options);
  });
  }
  
}
$(function(){
	$("input.delall,input[name=del]").change(function() {
		
		$(".print-multi-btn").attr("href","MultiPrint.php?print=");
		var listPrint = "";
        $("input.delall").each(function() {
			if ($(this).is(':checked')) {
				listPrint += $(this).val() + "-";
				$(".print-multi-btn").attr("href","MultiPrint.php?print=" + listPrint);
				$(".print-multi-btn").attr("target","_blank");
			}
			if(listPrint == "")
			{
				$(".print-multi-btn").attr("target","");
				$(".print-multi-btn").attr("href","#");
			}
		});
		
    });
	 
    $('.select2-dropdown').select2({'width':'250px'});
	$('.select2-dropdown-span4').select2({'width':'370px'});
	
	$('.select2-dropdown-full').select2();
	 
});
function setElementValue(ele,val) {
    document.getElementById(ele).value = val;
}