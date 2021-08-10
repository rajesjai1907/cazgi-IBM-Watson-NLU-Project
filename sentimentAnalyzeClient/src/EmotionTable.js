import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                //e.g. this.props.emotions = {"sadness":0.44386,"joy":0.50775,"fear":0.044669,"disgust":0.027835,"anger":0.087054}
                Object.entries(this.props.emotions).map(entry => {
                    return (
                        <tr>
                            <td>{entry[0]}</td> {/* e.g. "joy" */}
                            <td>{entry[1]}</td> {/* e.g. 0.50775 */}
                        </tr>
                    )
                })
            }
            </tbody>
          </table>
        </div>
        );
    }
}

export default EmotionTable;