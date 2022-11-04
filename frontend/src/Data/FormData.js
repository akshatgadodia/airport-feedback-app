const FormData = {
    foodcourt : {
        1 : {'q':"Service", 'next':2, "ref":"service", "ratingType":"stars"},
        2 : {'q':"Staff" , 'next':3, "ref":"staff", "ratingType":"stars"},
        3 : {'q':"FoodQuality", 'next':4, "ref":"foodQuality", "ratingType":"stars"},
        4 : {'q':"ValueForMoney", 'next':5, "ref":"valueForMoney", "ratingType":"stars"},
        5 : {'q':"Cleanliness", 'next':6, "ref":"cleanliness", "ratingType":"stars"},
        6 : {'q':"FeedbackMessage", "ref":"feedbackMessage", "ratingType":"text"},
    },
    airline : {
        1 : {'q':"Name of Airline", 'next':2,"ref":"name", "ratingType":"dropdown"},
        2 : {'q':"Rating", 'next':3,"ref":"rating", "ratingType":"stars"},
        3 : {'q':"Will you recommend this Airline", 'next':4,"ref":"recommendation", "ratingType":"stars"},
        4 : {'q':"Service" , 'next':5,"ref":"service", "ratingType":"stars"},
        5 : {'q':"Staff", 'next':6,"ref":"staff", "ratingType":"stars"},
        6 : {'q':"FeedbackMessage","ref":"feedbackMessage", "ratingType":"text"},
    },
    checkin : {
        1 : {'q':"Service" , 'next':2,"ref":"service", "ratingType":"stars"},
        2 : {'q':"Staff", 'next':3,"ref":"staff", "ratingType":"stars"},
        3 : {'q':"FeedbackMessage","ref":"feedbackMessage", "ratingType":"text"},
    },
    helpdesk : {
        1 : {'q':"Rating", 'next':2,"ref":"rating", "ratingType":"stars"},
        2 : {'q':"How efficiently the help desk answered your query?", 'next':3,"ref":"service", "ratingType":"stars"},
        3 : {'q':"Behaviour of Staff", 'next':4,"ref":"staff", "ratingType":"stars"},
        4 : {'q':"FeedbackMessage","ref":"feedbackMessage", "ratingType":"text"},
    },
    lounge : {
        1 : {'q':"Lounge Name", 'next':2,"ref":"name", "ratingType":"dropdown"},
        2 : {'q':"Rating", 'next':3,"ref":"rating", "ratingType":"stars"},
        3 : {'q':"Will you recommend this lounge", 'next':4,"ref":"recommendation", "ratingType":"stars"},
        4 : {'q':"Food", 'next':5,"ref":"food", "ratingType":"stars"},
        5 : {'q':"Service", 'next':6,"ref":"service", "ratingType":"stars"},
        6 : {'q':"Staff", 'next':7,"ref":"staff", "ratingType":"stars"},
        7 : {'q':"FeedbackMessage","ref":"feedbackMessage", "ratingType":"text"},
    },
    store : {
        1 : {'q':"name" , 'next':2,"ref":"name", "ratingType":"dropdown"},
        2 : {'q':"rating" , 'next':3,"ref":"rating", "ratingType":"stars"},
        3 : {'q':"recommendation" , 'next':4,"ref":"recommendation", "ratingType":"stars"},
        4 : {'q':"service" , 'next':5,"ref":"service", "ratingType":"stars"},
        5 : {'q':"staff", 'next':6,"ref":"staff", "ratingType":"stars"},
        6 : {'q':"valueForMoney", 'next':7,"ref":"valueForMoney", "ratingType":"stars"},
        7 : {'q':"productQuality" , 'next':8,"ref":"productQuality", "ratingType":"stars"},
        8 : {'q':"feedbackMessage","ref":"feedbackMessage", "ratingType":"text"},
    },
    washroom : {
        1 : {'q':"rating" , 'next':2,"ref":"rating", "ratingType":"stars"},
        2 : {'q':"cleanliness", 'next':3,"ref":"cleanliness", "ratingType":"stars"},
        3 : {'q':"availabilityOfToiletries" , 'next':4,"ref":"availabilityOfToiletries", "ratingType":"stars"},
        4 : {'q':"feedbackMessage","ref":"feedbackMessage", "ratingType":"text"}
    }
}

export default FormData