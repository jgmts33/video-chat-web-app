import { useParams } from "react-router";
import Message from "../Message/Message";
import { connect } from "react-redux";
import { useState } from "react";
import { Redirect } from "react-router";

function Room({ isAuthenticated}) {
  let [room, setRoom] = useState(useParams().id);

  return (
    <div className="w-full h-full flex">
      <div className="w-3/4 h-full"></div>
      <div className="w-1/4 h-full border-l border-gray-300">
        <Message room={room} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Room);