import { useContext } from "react";
import { DataContext } from "../context/AppData";

function Faq(props) {
    const [ context ] = useContext(DataContext);
    let category = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.faq);
        let faq = section[0].faq;
        
        category = faq.filter(item => item.fields.category === props.type && item.fields.active === 1);
    }
    
    return (
        <div className="form-wizard">
            <h3 className="faq-title">frequently asked questions</h3>
            <hr />
            <ul>
            {category.map(item => {
                return (
                    <li className="faq" key={item.fields.id}>
                        <div className="question">{item.fields.question}</div>
                        <div className="answer">{item.fields.answer}</div>
                    </li>
                );
            })}
            </ul>
        </div>
    );
}

export default Faq;