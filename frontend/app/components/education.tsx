import * as React from 'react';
import * as i18next from 'i18next';

export default class Education extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <h2>{i18next.t('education')}</h2>
        <div>
          <strong>Основное</strong>
          <ul type='square'>
            <li>2007 - Московский Государственный Институт Электроники и Математики (Технический Университет), Факультет прикладной
                Математики/Кафедра "Информационная безопасность", Диплом (Квалификация: Математиик, Специальность: Компьютерная
                безопасность) <br /><br />Тема диплома: "Исследование возможностей организации взаимодействия нескольких экземпляров
                сетевого вируса, оценка повышения эффективности  функционирования вирусов, построенных по данной схеме, исследование
                особенностей защиты от подобных вирусов".
            </li>
          </ul>
        </div>
        <div>
          <strong>Повышение квалификации</strong>
          <ul type='square'>
            <li>2008 - Communication Skills, The Center for Business Skills Development, Курсы</li>
          </ul>
        </div>
      </div>
    );
  }
}
