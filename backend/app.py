import time
from flask import Flask, render_template, jsonify
# import main as main_service
# import sms_reader as sms_reader_service

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/start_main_service", methods=["POST","GET"])
def start_main_service():
    try:
        # run main service fucntion
        # main_service.main()
        print('starting main service...')
        time.sleep(5)
        print('started...')
        return jsonify(
            {
                "status": "success",
                "response": "Main Service started succesfully. Start SMS Reader Service",
            }
        )
    except Exception as e:
        
        print(f"Error: {e}")
        return jsonify(
            {
                "status": "error",
                "response": "There was an error starting the service. Please try again",
            }
        )

@app.route("/start_sms_reader_service", methods=["POST","GET"])
def start_sms_reader_service():
    try:
        # run sms reader service
        # sms_reader_service.main()
        print('starting sms reader service...')
        time.sleep(5)
        print('started...')
        return jsonify(
            {
                "status": "success",
                "response": "SMS Reader Service Service started succesfully.",
            }
        )

    except Exception as e:
        print(f"Error: {e}")
        return jsonify(
            {
                "status": "error",
                "response": "There was an error starting the service. Please try again",
            }
        )



if __name__ == "__main__":
    app.run(debug=True)