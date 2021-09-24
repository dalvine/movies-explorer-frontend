import './Profile.css';

function Profile({name, email}) {
  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {name ? 'name' : 'Владислав'}!</h1>
      <div className="profile__information">
        <div className="profile__item">
          <p className="profile__category">Имя</p>
          <p className="profile__value">{name ? 'name' : 'Владислав'}</p>
        </div>
        <div className="profile__item">
          <p p className="profile__category">E-mail</p>
          <p className="profile__value">{email ? 'name' : 'pochta@yandex.ru'}</p>
        </div>
      </div>
      <div className="profile__control">
        <button className="profile__edit">Редактировать</button>
        <button className="profile__exit">Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
