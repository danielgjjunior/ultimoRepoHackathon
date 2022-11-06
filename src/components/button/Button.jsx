import './styles.css'


export function Button(props) {


    return (
            <div className='containerBtn' style={{ backgroundColor: props.bg }} >
                
                <p className='txt' style={{ color: props.color }}>{props.title}</p>
                
            </div>
        
        )
}