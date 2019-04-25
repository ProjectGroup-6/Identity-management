var React = require('react');
var QRCode = require('qrcode.react');

class Qrcode extends React.Component{
    render() {
        return (
            <div>
                <QRCode value="Koppresh,cs" />
            </div>
        
        );
    }
}

export default Qrcode;