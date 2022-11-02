const FormData = {
    foodcourt : {
        1 : {'q':"Service", 'next':2,"ref":"service"},
        2 : {'q':"Staff" , 'next':3, "ref":"staff"},
        3 : {'q':"FoodQuality", 'next':4, "ref":"foodQuality"},
        4 : {'q':"ValueForMoney", 'next':5, "ref":"valueForMoney"},
        5 : {'q':"Cleanliness", 'next':6, "ref":"cleanliness"},
        6 : {'q':"FeedbackMessage", "ref":"feedbackMessage"},
    },
    airline : {
        1 : {'q':"Name of Airline", 'next':2,"ref":"name"},
        2 : {'q':"Rating", 'next':3,"ref":"rating"},
        3 : {'q':"Will you recommend this Airline", 'next':4,"ref":"recommendation"},
        4 : {'q':"Service" , 'next':5,"ref":"service"},
        5 : {'q':"Staff", 'next':6,"ref":"staff"},
        6 : {'q':"FeedbackMessage","ref":"feedbackMessage"},
    },
    checkin : {
        1 : {'q':"Service" , 'next':2,"ref":"service"},
        2 : {'q':"Staff", 'next':3,"ref":"staff"},
        3 : {'q':"FeedbackMessage","ref":"feedbackMessage"}
    },
    helpdesk : {
        1 : {'q':"Rating", 'next':2,"ref":"rating"},
        2 : {'q':"How efficiently the help desk answered your query?", 'next':3,"ref":"service"},
        3 : {'q':"Behaviour of Staff", 'next':4,"ref":"staff"},
        4 : {'q':"FeedbackMessage","ref":"feedbackMessage"}
    },
    lounge : {
        1 : {'q':"Lounge Name", 'next':2,"ref":"name"},
        2 : {'q':"Rating", 'next':3,"ref":"rating"},
        3 : {'q':"Will you recommend this lounge", 'next':4,"ref":"recommendation"},
        4 : {'q':"Food", 'next':5,"ref":"food"},
        5 : {'q':"Service", 'next':6,"ref":"service"},
        6 : {'q':"Staff", 'next':7,"ref":"staff"},
        7 : {'q':"FeedbackMessage","ref":"feedbackMessage"}
    },
    store : {
        1 : {'q':"name" , 'next':2,"ref":"name"},
        2 : {'q':"rating" , 'next':3,"ref":"rating"},
        3 : {'q':"recommendation" , 'next':4,"ref":"recommendation"},
        4 : {'q':"service" , 'next':5,"ref":"service"},
        5 : {'q':"staff", 'next':6,"ref":"staff"},
        6 : {'q':"valueForMoney", 'next':7,"ref":"valueForMoney"},
        7 : {'q':"productQuality" , 'next':8,"ref":"productQuality"},
        8 : {'q':"feedbackMessage","ref":"feedbackMessage"}
    },
    washroom : {
        
    }
}

export default FormData