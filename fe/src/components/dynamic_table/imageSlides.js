import Carousel from "react-bootstrap/Carousel";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import React from "react";
import sample from '../../assets/images/sample.jpg';
import points from '../../assets/line_points';


function dotProduct(vector1, vector2) {
    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
        result += vector1[i] * vector2[i];
    }
    return result;
}

function vecSubtract(vector1, vector2) {
    let result = [];
    for (let i = 0; i < vector1.length; i++) {
        result.push(vector1[i] - vector2[i]);
    }

    return result

}

function isIn(M) {
    let detected = '';
    for (let point of points) {
        let coordinates = point['points'];
        let A = coordinates[0];
        let B = coordinates[1];
        let D = coordinates[3];

        let AM = vecSubtract(M, A);
        let AB = vecSubtract(B, A);
        let AD = vecSubtract(D, A);

        let check = (dotProduct(AM, AB) > 0 && dotProduct(AB, AB) > dotProduct(AM, AB)) && (dotProduct(AM, AD) > 0 && dotProduct(AD, AD) > dotProduct(AM, AD));

        if (check) {
            detected = point['detected'];
        }
    }

    return detected
}

function getOnClickWord(mouseClick, getLineClick) {
    let boundingClient = document.getElementById('img').getBoundingClientRect();
    let width = boundingClient.width;
    let height = boundingClient.height;

    let x = mouseClick.clientX - boundingClient.x;
    let y = mouseClick.clientY - boundingClient.y;

    let detected = isIn([x / width, y / height]);

    getLineClick(detected)
}

function ImageSlides({getLineClick}) {
    return <Carousel>
        <Carousel.Item onClick={(mouseClick) => getOnClickWord(mouseClick, getLineClick)}>
            <TransformWrapper>
                <TransformComponent>
                    <img
                        className="d-block w-100"
                        id='img'
                        src={sample}
                        alt="First slide"
                    />
                </TransformComponent>
            </TransformWrapper>
        </Carousel.Item>
    </Carousel>


}

export default ImageSlides;


// https://math.stackexchange.com/questions/190111/how-to-check-if-a-point-is-inside-a-rectangle
//https://muffinman.io/javascript-get-element-offset/
