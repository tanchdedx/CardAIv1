import React, {Component} from 'react';
import Icon, {Telegram} from 'react-share-icons';
import Instagram from 'react-share-icons/lib/Instagram';
 
class Shares extends Component {
  render() {
    return (
      <div>
        <div>
          <Icon type="Facebook" className="shares-facebook"/>
          <Icon type="Twitter" className="shares-twitter"/>
          <Instagram className="shares-instagram"/>
        </div>
 
        <a href="https://telegram.org/">
          <Telegram className="shares-telegram"/>
        </a>
      </div>
    );
  }
}
 
export default Shares;