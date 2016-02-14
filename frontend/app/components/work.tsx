import * as React from 'react';

export default class Work extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <h2>Профессиональный опыт</h2>
        <p>
          <strong>Руководитель группы тестирования</strong>
          <br /><a href="http://www.infowatch.ru/">InfoWatch (Kaspersky Lab's company)</a>, Москва
          <br />Сентябрь, 2010 - по настоящее время
          <br />Проекты: <a href="http://www.infowatch.ru/products/traffic_monitor_enterprise" target="_blank">Traffic Monitor Enterprise</a>, <a href="http://www.infowatch.ru/products/traffic_monitor_standard" target="_blank">Traffic Monitor Standard</a></p>
          <ul type="square">
            <li> Занимался общим руководством группой тестирования - построение планов развития сотрудников, предоставление Feedback по результатам работы, повышение профессионального уровня сотрудников.</li>
          </ul>
          <p>Достижения:</p>
          <ul type="square">
          </ul>
      </div>
    )
  }
}
