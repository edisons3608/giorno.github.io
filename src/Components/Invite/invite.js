import "./invite.css";
import InvitePicture from "../../images/inviteDiscord.png";


var Invite = function invite(){
    return(
        <div>
            <a id = "invite" target="_blank" rel="noopener noreferrer" href = "https://discord.com/api/oauth2/authorize?client_id=745798846633738310&permissions=2147483639&scope=bot">
                <img src = {InvitePicture} alt = "Add to Discord"></img>
            </a>   
        </div>

    )
}

export default Invite;
