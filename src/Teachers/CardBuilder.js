import { Card, CardActions, CardContent } from '@mui/material';

export function CardBuilder({ content, id, editbtn, deletebtn }) {

    return (
        <Card className='card' key={id}>
            <CardContent>
                <div className='head'>
                    <h2 className='title'>
                        Name :- {content.name}
                    </h2>
                    <h3>Subject :- {content.subject}</h3>
                    <p>
                        Age :- {content.age}
                    </p>
                    <p>
                        Phone :- {content.phonenumber}
                    </p>
                </div>
            </CardContent>
            <CardActions className='actions'>
                {editbtn}
                {deletebtn}
            </CardActions>
        </Card>
    );
}
