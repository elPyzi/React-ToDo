import BoyAvatar from '../assets/images/boy.png';
import { useState } from 'react';

function Avatar() {
    const [image, setImage] = useState(localStorage.getItem('avatar') || null);
    const handleImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                localStorage.setItem('avatar', e.target.result);
            };
            reader.onerror = () => {
                alert('Невозможно загрузить фотографию');
            };
            reader.readAsDataURL(event.target.files[0]);
        } else {
            alert('Выберите пожалуйста корректное изображение');
        }
    };

    return (
        <div className="header__avatar">
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-avatar"
                onChange={handleImage}
            />
            <label htmlFor="upload-avatar">
                {image ? (
                    <img
                        src={image}
                        alt="avatar"
                        className="header__avatar-img"
                    />
                ) : (
                    <img src={BoyAvatar} alt="avatar" className="avatar" />
                )}
            </label>
        </div>
    );
}

export default Avatar;
