$(document).ready(function () {

    $(".banner-card-wrap").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
    });

    $(".speakersSlide").owlCarousel({
        items: 1,
        nav: true,
        autoplay: false,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".partner-logos").owlCarousel({
        items: 5,
        nav: true,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1099: {
                items: 5
            }
        }
    });
});


$('a[href^="#"]:not([data-toggle="tab"])').on('click', function (e) {
    var navHeight = document.getElementById("topNavBar");
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - navHeight.offsetHeight }, 800);
    return false;
});


$(window).on('load', function () {
    $("body").removeClass("loading");
    $('input[name="lead[custom_field][cf_source_referrer_url]"]').closest(".fserv-field").hide();
	$('input[name="lead[custom_field][cf_source_referrer_url]"]').val(window.location.href);
});



var json = [
    {
        "language": "English",
        "speakers": [
            {
                "id": "e1",
                "name": "Oliver",
                "fullName": "Oliver Fortades",
                "designation": "Head of Corporate Process Management",
                "company": "W-Tech Solutions Inc.",
                "linkedin": "https://www.linkedin.com/in/oliverfortades/",
                "description": "ITIL Expert, CCISO, PRINCE2, CRM",
                "imgSrc": "oliver.png",
                "email": "oliver.fortades@w-techsolutions.com"
            },
            {
                "id": "e2",
                "name": "Asmah",
                "fullName": "Asmah Yassin",
                "designation": "Snr. Manager Business Application",
                "company": "Sapura",
                "linkedin": "https://www.linkedin.com/in/asmah-yassin-700b1912/",
                "description": "Group Transformation and Performance, Technology",
                "imgSrc": "asmah.png",
                "email": "asmah.yassin@sapura-omv.com"
            },
            {
                "id": "e3",
                "name": "Chan",
                "fullName": "Chan Kee Siak",
                "designation": "Founder & CEO",
                "company": "Exabytes Group",
                "linkedin": "https://www.linkedin.com/in/keesiak/",
                "description": "Started humbly as a helper at his father’s hawker store, Chan enrolled into a local college at 18 years old, selling PC hardware on a part time basis to earn his tuition fees. As he discovered the potential of web hosting and lack of providers in Malaysia when building a website for his customer, at 19 he set up his first web hosting reseller business which was 100% Online based, and business kept coming in. To grab the once in a lifetime opportunity, Chan dropped out of college to concentrate on his online business.Under the leadership of Chan, today the Exabytes Group consists of 12 subsidiaries, with businesses ranging from web hosting to eCommerce and e- Deliveries, serving over 140, 000 businesses with over 1 million users in 121 countries.Besides being the local director of Founder Institute, Chan is also the president of the Internet Alliance, Malaysia, and the honoree of TOYM(Top Outstanding Young Malaysian), 2015. Chan is also co- founder of EasyParcel, EasyStore, EasyWork, EasySpace and angel investors in several startups.",
                "imgSrc": "chan.jpg",
                "email": "chan@exabytes.com"
            },
            {
                "id": "e4",
                "name": "Wilson",
                "fullName": "Wilson Lim",
                "designation": "Business Operation Director",
                "company": "Sitegiant",
                "linkedin": "https://www.linkedin.com/in/wilson-lim-eng-khoon-63b0ba53/",
                "description": "",
                "imgSrc": "wilson.jpg",
                "email": "value"
            },
            {
                "id": "e5",
                "name": "Airindira",
                "fullName": "Airindira Siregar",
                "designation": "Pjs. Division Head, ICT & ICS Service Management",
                "company": "PGNCOM",
                "linkedin": "https://www.linkedin.com/in/airindira-graciella-siregar-bb841125/",
                "description": "",
                "imgSrc": "airindira.jpg",
                "email": "value"
            },
            {
                "id": "e6",
                "name": "Wen Chi Li",
                "fullName": "Wen Chi Li",
                "designation": "Director",
                "company": "InfoFabrica",
                "linkedin": "https://www.linkedin.com/in/wen-chi-li-a4210612/",
                "description": "",
                "imgSrc": "wen.jpg",
                "email": "value"
            },
            {
                "id": "e7",
                "name": "Kevin",
                "fullName": "Kevin Sugianto",
                "designation": "Head of Commercial",
                "company": "Kerry Express",
                "linkedin": "https://www.linkedin.com/in/kevinsugianto/",
                "description": "",
                "imgSrc": "kevin.jpg",
                "email": "value"
            },
            {
                "id": "e8",
                "name": "Ashish",
                "fullName": "Ashish Thukral",
                "designation": "Managing Partner",
                "company": "Mindshare",
                "linkedin": "https://www.linkedin.com/in/ashish-thukral-2941053/",
                "description": "",
                "imgSrc": "ashish.jpg",
                "email": "value"
            },
            {
                "id": "e9",
                "name": "Prasad",
                "fullName": "Prasad Ramakrishnan",
                "designation": "Chief Information Officer & Chief Information Security Officer",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/prasadramakrishnan/",
                "description": "__",
                "imgSrc": "prasad.jpg",
                "email": "value"
            },
            {
                "id": "e10",
                "name": "Paddy Rathinam",
                "fullName": "Paddy Rathinam",
                "designation": "Chief Customer Officer",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/paddyrathinam/",
                "description": "",
                "imgSrc": "rathinam.jpg",
                "email": "value"
            },
            {
                "id": "e11",
                "name": "Sidharth Malik",
                "fullName": "Sidharth Malik",
                "designation": "Chief Revenue Officer",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/sidharthmalik/",
                "description": "",
                "imgSrc": "sidharth.jpg",
                "email": "value"
            },
            {
                "id": "e12",
                "name": "Anand Venkatraman",
                "fullName": "Anand Venkatraman",
                "designation": "Vice President & Global Partnerships Head",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/anandvenkat/",
                "description": "",
                "imgSrc": "anand.jpg",
                "email": "value"
            },
            {
                "id": "e13",
                "name": "Ganesh Raj",
                "fullName": "Ganesh Raj",
                "designation": "Director-Strategic Alliances",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/ganesh-raj-823ab65/",
                "description": "",
                "imgSrc": "ganesh.jpg",
                "email": "value"
            },
            {
                "id": "e14",
                "name": "Colin",
                "fullName": "Colin Blackwell",
                "designation": "Chairman of HR Group",
                "company": "Vietnam Business Forum",
                "linkedin": "https://www.linkedin.com/in/colin-blackwell-70772030/",
                "description": "Colin has been in Vietnam since 1995 and is the founder of the national HR Associations. His experience ranges from consulting for PwC, to global HR leadership roles, to now founding a tech startup social enterprise. He advises the Vietnam government on HR matters in his role with the World Bank's Vietnam Business Forum. He is a judge of the Vietnam HR Awards and a number of global startup competitions, including the United Nations Generation Unlimited and the Hult Prize. He is a keynote speaker around Asia on the future of work and how people can best adapt to technology transformation.",
                "imgSrc": "colin.jpg",
                "email": "value"
            },
            {
                "id": "e15",
                "name": "Vinod Chandramouli",
                "fullName": "Vinod Chandramouli",
                "designation": "Head of ASEAN Business",
                "company": "Freshworks Inc.",
                "linkedin": "https://www.linkedin.com/in/vinodchandramouli/",
                "description": "",
                "imgSrc": "vinod.jpg",
                "email": "value"
            }
            // {
            //     "id": "e4",
            //     "name": "Jaymes",
            //     "fullName": "Jaymes Deok",
            //     "designation": "Chief Digital Officer",
            //     "company": "Infofabrica Consulting Pte Ltd",
            //     "linkedin": "https://www.linkedin.com/in/fulin-deok-b0514455/",
            //     "description": "Jaymes Deok is the Chief Digital Officer of InfoFabrica. He spearheads InfoFabrica’s digital transformation journey. After spending more than a decade in digital consultancy, Jaymes truly understands how digital transformation can help businesses achieve improved customer experience, employee experience and desired business outcomes. Jaymes worked with Infineon, Royal Sporting House, Singapore Petroleum Company and NAFDA to achieve improved customer experience, employee productivity and data accuracy. Jaymes had also worked with a broad spectrum of digital solutions like ERP solutions, accounting solutions, finance performance management solutions, finance budgeting & planning solutions, cloud contact centre solutions, omnichannel communication solutions, service desk ticketing solutions, project management solutions, task management solutions, sales management solutions, customer relationship management solutions, point-of-sales solutions, business intelligence solutions etc.",
            //     "imgSrc": "jaymes.jpg",
            //     "email": "value"
            // },
            // {
            //     "id": "",
            //     "name": "Jenthi",
            //     "fullName": "Jenthi Krishna",
            //     "designation": "Manager, CRM & Loyalty",
            //     "company": "Nando's",
            //     "linkedin": "",
            //     "description": "",
            //     "imgSrc": "jenthi.jpg",
            //     "email": "value"
            // }
        ]
    },
    {
        "language": "Bahasa",
        "speakers": [

            {
                "id": "b1",
                "name": "Jonathan",
                "fullName": "Jonathan Bryan",
                "designation": "Chief Marketing Officer",
                "company": "Koinworks",
                "linkedin": "https://www.linkedin.com/in/jonathan-bryan-a5615345/",
                "description": "Jonathan Bryan as Chief Marketing Officer is responsible to plan and execute overall marketing ideas both online and offline.As an online business enthusiast, Jonathan takes parts in conducting marketing and campaign ideas to emphasize the existence of KoinWorks. Aside from planning marketing ideas, Jonathan is also in charge of product development as he analyzes various aspects from the marketing side to make it real. With his passion in digital marketing, he was regularly coaching at 1000 Startup training hundreds of future leaders.Prior to joining KoinWorks, this Mechatronics Engineering graduate of Swiss German University, had spent his time in JobsDB and CareerBuilder Indonesia",
                "imgSrc": "jonathan.jpg",
                "email": "value"
            },
            {
                "id": "b2",
                "name": "Dayu",
                "fullName": "Dayu Dara Permata",
                "designation": "CEO",
                "company": "Pinhome",
                "linkedin": "https://www.linkedin.com/in/dayu-dara-permata-38072a2b/",
                "description": "Need access",
                "imgSrc": "dayu.jpg",
                "email": "value"
            },
            {
                "id": "b3",
                "name": "Kevin",
                "fullName": "Kevin Sugianto",
                "designation": "Head of Commercial",
                "company": "Kerry Express",
                "linkedin": "https://www.linkedin.com/in/kevinsugianto/",
                "description": "",
                "imgSrc": "kevin.jpg",
                "email": "value"
            }, 
            {
                "id": "b4",
                "name": "Yumir",
                "fullName": "Yumir Syamsyah Lubis",
                "designation": "Head of Marketing & communications",
                "company": "Chilibeli",
                "linkedin": "https://www.linkedin.com/in/yumir-lubis-36886030/",
                "description": "Yumir started to broaden up the marketing horizon in planning integrated advertising and promotional campaigns that stimulate sales, build consumer loyalty and increase bottom-line profitability.Previously, as the Creative Director at U-Studio Unilever, he led and commissions the team in the creation of entertaining and useful content, leveraging on creative insights from U-Studio's global network. Ten years of working in the creative industry gave him experience in creating thematic and tactical campaigns in teams such as Ogilvy, Geometry Global, TBWA, and leading a Tokopedia in-house creative team.  Also, Yumir led Tokopedia's in-house as Creative Group Lead, improving products and services for its users by using content creation both in visual and audio communication approach, standing up the social media engagement, creating and maintaining creative quality, and setting on brand guidelines.In 2015-2016, Yumir was the Senior Copywriter at Ogilvy & Mather Indonesia, where he created thematic and tactical campaigns from some of the biggest FMCG brands from Unilever and Nestle. He also joined in Thinking Machine Asia as Creative Group Head that won notable accounts for Pertamina, Mayora, PEPSI, via.com, and PZ Cussons.",
                "imgSrc": "yumir.jpg",
                "email": "value"
            }, 
            {
                "id": "b5",
                "name": "Hery Liandro",
                "fullName": "Hery Liandro",
                "designation": "Business Development Director",
                "company": "Weefer",
                "linkedin": "https://www.linkedin.com/in/hery-liandro-520a0850/",
                "description": "",
                "imgSrc": "hery.jpg",
                "email": "value"
            }, 
            {
                "id": "b6",
                "name": "Daud Novel Leonardo",
                "fullName": "Daud Novel Leonardo",
                "designation": "General Manager",
                "company": "Chilibeli",
                "linkedin": "https://www.linkedin.com/in/daud-novel-leonardo-2a493463/",
                "description": "",
                "imgSrc": "daud.jpg",
                "email": "value"
            }, 
            {
                "id": "b7",
                "name": "Aliya Amitra Tjakraamidjaja",
                "fullName": "Aliya Amitra Tjakraamidjaja",
                "designation": "COO",
                "company": "Tinkerlust",
                "linkedin": "https://www.linkedin.com/in/aliya-amitra-tjakraamidjaja-a4ab43a3/",
                "description": "",
                "imgSrc": "aliya.jpg",
                "email": "value"
            }                       
            // {
            //     "id": "b4",
            //     "name": "Yulia Dwi",
            //     "fullName": "Yulia Dwi Anggoro",
            //     "designation": "Sr. Community Engagement",
            //     "company": "Chilibeli",
            //     "linkedin": "https://www.linkedin.com/in/yulia-dwi-anggoro/",
            //     "description": "",
            //     "imgSrc": "yulia.jpg",
            //     "email": "value"
            // }

        ]
    },
    {
        "language": "Vietnamese",
        "speakers": [
            {
                "id": "v1",
                "name": "Kalidas Ghose",
                "fullName": "Kalidas Ghose",
                "designation": "CEO",
                "company": "FE Credit",
                "linkedin": "https://www.linkedin.com/in/kalidas-ghose-a02ab74/",
                "description": "",
                "imgSrc": "kalidas.jpg",
                "email": "value"
            },
            {
                "id": "v2",
                "name": "Vu Le Anh",
                "fullName": "Vu Le Anh",
                "designation": "CIO | Director",
                "company": "CMC Telecom | CMC Cloud Computing Unit",
                "linkedin": "https://www.linkedin.com/",
                "description": "",
                "imgSrc": "vu-le.jpg",
                "email": "value"
            },
            {
                "id": "v3",
                "name": "Vy Nguyen",
                "fullName": "Vy Nguyen",
                "designation": "Country Manager",
                "company": "Digi InfoFabrica",
                "linkedin": "https://www.linkedin.com/in/vytnguyen171/",
                "description": "",
                "imgSrc": "vy.png",
                "email": "value"
            },
            // {
            //     "id": "v4",
            //     "name": "Trung Dung",
            //     "fullName": "Trung Dung",
            //     "designation": "Human Resources Director",
            //     "company": "USG Boral Vietnam",
            //     "linkedin": "https://www.linkedin.com/in/trungdh/",
            //     "description": "",
            //     "imgSrc": "trun.jpg",
            //     "email": "value"
            // },
            {
                "id": "v4",
                "name": "Thinh Nguyen",
                "fullName": "Thinh Nguyen",
                "designation": "Head Of Information Technology",
                "company": "YOLA",
                "linkedin": "https://www.linkedin.com/in/thinh-nguyen-595b0430/",
                "description": "",
                "imgSrc": "thinh.jpg",
                "email": "value"
            },
            {
                "id": "v5",
                "name": "Peter Phuc Huynh",
                "fullName": "Peter Phuc Huynh",
                "designation": "Country Sales Director for Vietnam",
                "company": "Resulticks",
                "linkedin": "https://www.linkedin.com/in/hvphuc/",
                "description": "",
                "imgSrc": "peterphuchuynh.jpg",
                "email": "value"
            },
            {
                "id": "v5",
                "name": "Le Hong Phuc",
                "fullName": "Le Hong Phuc",
                "designation": "Founder & President",
                "company": "Vietnam Human Resources Association (VNHR)",
                "linkedin": "https://www.linkedin.com/in/lehongphuc/",
                "description": "",
                "imgSrc": "lehongphuc.jpg",
                "email": "value"
            }
            // {
            //     "id": "v3",
            //     "name": "Nguyễn Thịnh",
            //     "fullName": "Nguyễn Thịnh",
            //     "designation": "IT Director",
            //     "company": "Yola",
            //     "linkedin": "https://www.linkedin.com/in/thinh-nguyen-595b0430/",
            //     "description": "",
            //     "imgSrc": "thinh.jpg",
            //     "email": "value"
            // },
            // {
            //     "id": "v4",
            //     "name": "Mandy Nguyen",
            //     "fullName": "Mandy Nguyen",
            //     "designation": "Director of Ecosystem Development",
            //     "company": "Startup Vietnam Foundation",
            //     "linkedin": "https://www.linkedin.com/in/mandyquyennguyen/",
            //     "description": "",
            //     "imgSrc": "mandy.jpg",
            //     "email": "value"
            // },
            // {
            //     "id": "v6",
            //     "name": "Fulin Deok",
            //     "fullName": "Fulin Deok",
            //     "designation": "CTO",
            //     "company": "Infofabrica",
            //     "linkedin": "https://www.linkedin.com/in/fulin-deok-b0514455/",
            //     "description": "",
            //     "imgSrc": "fulin.jpg",
            //     "email": "value"
            // }
        ]
    },
    {
        "language": "Thai",
        "speakers": [
            // {
            //     "id": "t1",
            //     "name": "Topp",
            //     "fullName": "Topp Jirayut",
            //     "designation": "CEO",
            //     "company": "Bitkub",
            //     "linkedin": "https://www.linkedin.com/in/toppjirayut/",
            //     "description": "Colin has been in Vietnam since 1995 and is the founder of the national HR Associations. Hs experience ranges from consulting for PwC, to global HR leadership roles, to now founding a tech startup social enterprise. He advises the Vietnam government on HR matters in his role with the World Bank's Vietnam Business Forum. He is a judge of the Vietnam HR Awards and a number of global startup competitions, including the United Nations Generation Unlimited and the Hult Prize. He is a keynote speaker around Asia on the future of work and how people can best adapt to technology transformation.",
            //     "imgSrc": "topp.jpg",
            //     "email": "value"
            // },
            {
                "id": "t2",
                "name": "Alex",
                "fullName": "Alex Natthaphon Kanjarnavoranun",
                "designation": "Assistant Vice President, Head of Online Marketing",
                "company": "Ex-robinson",
                "linkedin": "https://www.linkedin.com/in/natthaphon/",
                "description": "",
                "imgSrc": "alex.jpg",
                "email": "value"
            },
            {
                "id": "t3",
                "email": "value",
                "name": "Thanaboon Mingkaew",
                "fullName": "Thanaboon Mingkaew",
                "designation": "CEO & Chairman",
                "company": "SmartIoT Technology Co., Ltd.",
                "linkedin": "https://www.linkedin.com/in/thanaboon-mingkaew-953b332b/",
                "description": "",
                "imgSrc": "thanaboon.jpg",
                "email": "value"
            },
            {
                "id": "t1",
                "name": "Anthony Daño",
                "fullName": "Anthony Daño",
                "designation": "Head Of Business Development",
                "company": "SmartIoT Technology Co., Ltd.",
                "linkedin": "https://www.linkedin.com/in/anthony-da%C3%B1o-73314416b/",
                "description": "",
                "imgSrc": "anthony.jpg",
            },
            {
                "id": "t4",
                "name": "Jitti Niramitranon",
                "fullName": "Jitti Niramitranon",
                "designation": "Deputy Director (Office of Educational Administration)",
                "company": "Kasetsart University",
                "linkedin": "https://www.linkedin.com/in/jitti-niramitranon-2363211b9/",
                "description": "",
                "imgSrc": "jitti.jpg",
            },
            {
                "id": "t5",
                "name": "Pansak Plumkoson",
                "fullName": "Pansak Plumkoson",
                "designation": "Head of Sales",
                "company": "Cloudee Telecom",
                "linkedin": "https://www.linkedin.com/in/pansak-plumkoson-bab59a126/",
                "description": "",
                "imgSrc": "pansak.jpg",
            }
            
        ]
    }
];

var a = '';
var b = '';
/////var c = '<div class="row justify-content-center">';
for (var i = 0; i < json.length; i++) {

    a += '<li class="nav-item"><a class= "nav-link" id = "' + json[i].language + '-tab" data-toggle="tab" href = "#' + json[i].language + '" role = "tab" aria-controls="' + json[i].language + '" aria-selected="true"> ' + json[i].language + '</a> </li>';

    b += '<div class="tab-pane fade" id="' + json[i].language + '" role="tabpanel" aria-labelledby="' + json[i].language + '-tab" ></div>';

    $('#' + json[i].language).html(c);
}
$('#speakersTab').html(a);
$('#speakersTabContent').html(b);


for (var i = 0; i < json.length; i++) {

    var c = '<div class="row">';

    for (var j = 0; j < json[i].speakers.length; j++) {

        c += '<div class="col-xl-3 col-md-4 col-6"><div class="speakers"><div class="speaker1"> <img class="speakersImg" src="images/speakers/' + json[i].speakers[j].imgSrc + '" /><a data-toggle="modal"'
        c += 'data-fullName=' + JSON.stringify(json[i].speakers[j].fullName) + ''
        c += 'data-name=' + JSON.stringify(json[i].speakers[j].name) + ''
        c += 'data-designation=' + JSON.stringify(json[i].speakers[j].designation) + ''
        c += 'data-company=' + JSON.stringify(json[i].speakers[j].company) + ''
        c += 'data-description=' + JSON.stringify(json[i].speakers[j].description) + ''
        c += 'data-imgSrc=' + JSON.stringify(json[i].speakers[j].imgSrc) + ''
        c += 'data-linkedin=' + JSON.stringify(json[i].speakers[j].linkedin) + ''
        c += 'data-id=' + JSON.stringify(json[i].speakers[j].id) + ' data-target="#viewSpeakers">'
        c += '+</a> </div><h4>' + json[i].speakers[j].fullName + '</h4><p><i>' + json[i].speakers[j].designation + '</i><br>' + json[i].speakers[j].company + '</p> </div> </div>'

    }
    c += '</div>'
    $('#' + json[i].language).html(c);
    c = '';
}

$('#viewSpeakers').on('show.bs.modal', function (e) {
    // var yourparameter = e.relatedTarget.dataset.yourparameter;
    // Do some stuff w/ it.
    //alert((JSON.stringify(array)))

    //console.log($('#speakerName').length);
    $('#speakerName').html($(e.relatedTarget).attr('data-fullName'));
    $('#speakerDesignation').html($(e.relatedTarget).attr('data-designation') + "<br>" + $(e.relatedTarget).attr('data-company'));
    $('#speakerFollowName').html("Follow " + $(e.relatedTarget).attr('data-name'));
    $('.modal-speaker-img').css('background-image', 'url("images/speakers/' + $(e.relatedTarget).attr('data-imgSrc') + '")');
    $('#speakerLinkedIn').attr('href', $(e.relatedTarget).attr('data-linkedin'));
});

$('#viewSpeakers').on('shown.bs.modal', function (e) {
    $('.modal-backdrop.fade.in').remove();
});

$('#viewSpeakers').on('hidden.bs.modal', function (e) {
    $('.home-page').removeAttr("style");
});

// Mobile number validation
var WebFormEvent = {
    afterInstall: function () {
        (function ($) {
            $.fn.inputFilter = function (inputFilter) {
                return this.on("input keydown keyup mousedown mouseup select contextmenu drop",
                    function () {
                        if (inputFilter(this.value)) {
                            this.oldValue = this.value;
                            this.oldSelectionStart = this.selectionStart;
                            this.oldSelectionEnd = this.selectionEnd;
                        } else if (this.hasOwnProperty("oldValue")) {
                            this.value = this.oldValue;
                            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                        } else {
                            this.value = "";
                        }
                    });
            };
        }(jQuery));

        $('input[name="lead[custom_field][cf_source_referrer_url]"]').closest(".fserv-field").hide();
        $('input[name="lead[custom_field][cf_source_referrer_url]"]').val(window.location.href); 
        $(".formserv-tel-field input").attr("maxlength", "15");
        $(".formserv-tel-field input").attr("minlength", "6");
        $(".formserv-tel-field input").inputFilter(function (value) {
            return /^-?\d*$/.test(value);
        });
    }
}

