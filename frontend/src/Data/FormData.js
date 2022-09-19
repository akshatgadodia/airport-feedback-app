const FormData = {
    food : {
        1 : {'q':"Service", 'next':2},
        2 : {'q':"Staff" , 'next':3},
        3 : {'q':"FoodQuality", 'next':4},
        4 : {'q':"ValueForMoney", 'next':5},
        5 : {'q':"Cleanliness", 'next':6},
        6 : {'q':"FeedbackMessage"},
    },
    airline : {
        1 : {'q':"Name of Airline", 'next':2},
        2 : {'q':"Rating", 'next':3},
        3 : {'q':"Will you recommend this Airline", 'next':4},
        4 : {'q':"Service" , 'next':5},
        5 : {'q':"Staff", 'next':6},
        6 : {'q':"FeedbackMessage"},
    },
    checkin : {
        1 : {'q':"Service" , 'next':2},
        2 : {'q':"Staff", 'next':3},
        3 : {'q':"FeedbackMessage"}
    },
    helpdesk : {
        1 : {'q':"Rating", 'next':2},
        2 : {'q':"How efficiently the help desk answered your query?", 'next':3},
        3 : {'q':"Behaviour of Staff", 'next':4},
        4 : {'q':"FeedbackMessage" }
    },
    lounge : {
        1 : {'q':"Lounge Name", 'next':2},
        2 : {'q':"Rating", 'next':3},
        3 : {'q':"Will you recommend this lounge", 'next':4},
        4 : {'q':"Food", 'next':5},
        5 : {'q':"Service", 'next':6},
        6 : {'q':"Staff", 'next':7},
        7 : {'q':"FeedbackMessage"}
    },
    store : {
        1 : {'q':"name" , 'next':2},
        2 : {'q':"rating" , 'next':3},
        3 : {'q':"recommendation" , 'next':4},
        4 : {'q':"service" , 'next':5},
        5 : {'q':"staff", 'next':6},
        6 : {'q':"valueForMoney", 'next':7},
        7 : {'q':"productQuality" , 'next':8},
        8 : {'q':"feedbackMessage"}
    }
}

export default FormData