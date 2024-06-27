export const articles = [
	{
		title: 'JavaScript Библиотеки, jQuery',
		date: '24 декабря 2023',
		author: 'Журнал «Код',
		img: 'https://wshop.fi/eng/wp-content/uploads/2021/03/featured_jquery-scaled.jpg',
		text: `
    <p><a href="https://jquery.com/">jQuery</a> — одна из старейших (первый релиз состоялся в 2006 году), это
      небольшая, быстрая и многофункциональная
      кроссплатформенная библиотека, которая предназначена для простого написания HTML-скриптов на стороне клиента.
      Благодаря API, который работает в большом количестве браузеров, jQuery сильно упрощает обработку событий, создание
      анимации и другие задачи.</p>
    <h4>Преимущества jQuery:</h4>
    <ul>
      <li>хорошая масштабируемость;</li>
      <li>универсальность;</li>
      <li>лёгкая адаптация объектной модели DOM при добавлении и удалении элементов;</li>
      <li>оптимизированный процесс отправки HTTP-запросов;</li>
      <li>возможность использовать динамический контент.</li>
    </ul>
    <h4>Недостатки jQuery:</h4>
    <ul>
      <li>низкая скорость работы;</li>
      <li>наличие более продвинутых альтернатив;</li>
      <li>устаревший API объектной модели.</li>
    </ul>
    <p>Вот такой код выведет на экран надпись «Hello, World!»:</p>
    <img
      src="https://dzen.ru/lz5XeGt8f/K9R92bJ52/2f8d1fgEwe4/30GsGQqq6APBcAeAGRKZ53na0yBs2H2whGBbdvWFZojIXRUVmjNiHOeqH9A92EvfgpUh1IOHHjHR8Yh_NEKXKBtWPp_eu2kTDuEWBY1BDHEtmEexOou54ZfhzHNygudehw_SFYmk9odl6h3X9hLDGB-PvA1dGIAuRDfd6bGSh_MURzVKRmWrTky4T9KTlh4h8VsT7yGNffeU6Rv1poHjSw1fkxfN4z2D-_1MQzSZRxsexnNAEVTKoY31kWfnHMJ42NQ-zE8rIswFOofZXR4TKLAd0SHqyH18n-ST96BH5EhNVFJbw-53gHg4A4I70U3b0gS0QxOcyinEvNWuI5ZJvt8ascxApG0AjDWOll2QXac32xQsp8Zw8dSrWHLkgWVGzJ5S3APrMwz__0NDOVtFENpF9kiSXc5oRnSep2gbTjgdFvVMQS4pBMD5i9HVlFHkN1SQ52aJ8LeU7ZmwpgpigsfclB8N5fbKM3XABbXRR9meCb8D2dMDpIaxlmRp00J6UJX_j0hkY4VKuIKXVVmVYDIX0yFpTb-8VOvRv63AogFJ3drUz6T8Cbp2QUE1XseSXEKzARSbDy5H9BUg7BBGPdWUOsoMZSEAiLVHk9rfWyY6GxlhJw91OFPhWHYiSWIIDFad2QCkcUY4P8jJvVaJG1RAO8xT1ENhgD_eI-PXQPKYnn4IA-QjzUg4yJMQV14o9xufpCfB_f_eZBi7ZAsljsxZk5GApn1MuX1IjjSQwNJfhn-K0pRHY4j0XGyvl8o239a_AIftYoKHsAYeExUSbLoQlyqiAXp50y-ZPmXJ5ECLVd4YyGO3RPgzgMe9l4LZnAI3AZJRw-gAud1gKV3EP90TfUdI7emNSjwOFlMcnO84ldPsKgA6fVRimnKlT2UAz1dbUMBlO0S7sMiOvVsI1RlC9UFf2QKkwzARoqbcB3LQ3L8DRmQtgoM2xhZS2lFtMpXSb-aJsfHT4tx3b8etQUmWE5HMKr3Jc3NJg7BWSpNbgTqAWhPO7MF5nexm1Qs5Gx7ySAokow0AdQkWVRzTIDIQVyxqBn0-FmJbOiqNakoEHZ3bCmG-CvS7wsm6G4_TEUi3SRLcASaJMZKm5J9CPxGSsgFEraTKAfKBld3WnKh21VytIoh_dhIpVn8kgKvJCd8UVsmp_QG9ssdDsFiB2xqBvI3UWc6oRf1fqeDQjnQQEjZDxyRlCwG2TRUeXtPnuxBb6qxHPfGcrF4_6oLsycOaXFACYX-D_P-AAzGZjRmSyTaCl5nGbIe3HWFo2kk8V509yYkv6keMt8cXEt0eKrpY2eGhRfDwXi0XcioH7olMFVPWiqV3Svv9SgY7l81akUL_SpoRCWSLuh8rK5gCcBNWMgEPJOYGijRFHRZUW2h-0l9l7wJ6PtRgUf3mDyFLzFfdlcXmscz7t4yA_11H2xPIPMueVMwjzvpU4SgbCjyQVfSLQm8uywSywhaQmRTlONBQ7e4Ot3gU5Ri7YIVrx8JQn1EM7PzMMjyHgvwRyt1djbKNExoPp8G3Valpl4O2mFT1x4hq6gQINEdQFV2Q6vcUlu9uDjl-0aCWMm_KL01FmBYQj-d9yjU2yQM6kEhaUkmyT1VTiS8HddekqN-Kd5vUu0xM4ujLTzrL0F5X2mg-2NJtJQhxuRJkE3mnx-4KBZDS1ozmP42x-IkKeZ8L2NvLssLT0A4lBzPZ6-dVj_AWU7uIjiwiSkc2QZZdkBHuMdRYJGnB9HaWJFJ_LEFsg8fZEphDLnMA9PcMB_rYApmcSvIKU9ALpMRwkqsiksP0kBK7DI_lKQ-N9Y9Y1FJbYHdVW-FuifRz0yVatu3KZI_BmVuXxSb9RPO9jAJxkQBZH0A6iByajOdPOpAvaBeJN17W_MuM4qEEgHwN1xLQ3eY_2RJhKEd4Pp2kXjukCqZBTJ8UnAwutYVx-MqIfNzIU5sE84jVG49oyfqWp2PbAj8Wl_qDxKEsRgF2wk"
      alt="">`,
	},
	{
		title: 'JavaScript Библиотеки, React',
		date: '23 декабря 2023',
		author: 'Журнал «Код',
		img: 'https://robertmarshall.dev/static/26124468a363485e9c10615e0c29c7f3/49f93/react-logo-banner.jpg',
		text: `
      <p><a href="https://react.dev/">React</a> — создана в 2013 году и предназначена для создания интерактивных пользовательских интерфейсов, в основном используется в мобильных и веб-приложениях. С помощью этой библиотеки можно создавать повторно используемые компоненты, которые могут автоматически обновлять и отображать данные на странице без её перезагрузки.</p>

      <p>Преимущества React:</p>

      <ul>
        <li>высокая производительность;</li>
        <li>лёгкая интеграция с фронтенд- и бэкенд-фреймворками;</li>
        <li>применимость на стороне клиента и сервера;</li>
        <li>кроссплатформенность;</li>
        <li>множество документации, учебных ресурсов и пособий;</li>
        <li>простота перехода со старых версий на новые;</li>
        <li>простота поддержки структуры компонентов;</li>
        <li>простой синтаксис JSX вместо JavaScript — код проще читать и поддерживать;</li>
        <li>односторонняя привязка данных — изменения в структуре дочерних не влияют на родительские;</li>
        <li>возможность повторного использования компонентов;</li>
        <li>SEO-дружелюбность — хорошая индексируемость страниц за счёт динамической отрисовки контента;</li>
        <li>постоянное развитие библиотеки.</li>
      </ul>

      <p>Недостатки React:</p>

      <ul>
        <li>сложность — многие считают библиотеку раздутой и предпочитают не использовать в небольших проектах;</li>
        <li>дополнительный барьер для погружения в виде синтаксиса JSX;</li>
        <li>необходимость в инструментах сборки для правильной работы и в совместимости с другими библиотеками и фреймворками;</li>
        <li>обновление документации не всегда поспевает за выходом новых версий.</li>
      </ul>

      <p>Снова надпись «Hello, World!»:</p>
      <img
      src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658539103c349263cde410e7_658543a0eb35721ecb510db3/scale_1200"
      alt="">
    `,
	},
	{
		title: 'JavaScript Библиотеки, D3.js',
		date: '22 декабря 2023',
		author: 'Журнал «Код',
		img: 'https://i.imgur.com/oiWd1bZ.jpg',
		text: `
    <p><a href="https://d3js.org/">D3.js</a> — библиотека для создания интерактивных и динамических элементов визуализации данных на веб-сайтах и в веб-приложениях. Позволяет управлять объектной моделью, основанной на данных, и применять собственные стили, анимацию и интерактивизацию.</p>

    <p>Преимущества D3.js:</p>

    <ul>
    <li>гибкость и мощность: можно визуализировать практические любые данные, от простых графиков до сложных карт, при этом можно кастомизировать буквально каждую деталь — от цвета до типа интерактивности;</li>
    <li>совместимость с большинством современных веб-браузеров и стандартов, таких как HTML, CSS и SVG;</li>
    <li>производительность — возможность обрабатывать большие и динамические наборы данных;</li>
    <li>отсутствие потребности во внешних плагинах и фреймворках;</li>
    <li>большая коллекция визуализаций;</li>
    <li>поддержка адаптивного дизайна для разных устройств и размеров экрана.</li>
    </ul>

    <p>Недостатки D3.js:</p>

    <ul>
    <li>сложность изучения и погружения — это низкоуровневая библиотека со строительными блоками для создания собственных решений для визуализации данных;</li>
    <li>необходимость знать JavaScript, HTML, CSS и SVG и уметь управлять данными;</li>
    <li>частая необходимость писать много кода, чтобы получить желаемый результат;</li>
    <li>отсутствие встроенных шаблонов, тем и компонентов даже для распространённых типов визуализации данных — их нужно писать с нуля или использовать сторонние плагины или библиотеки, которые могут устареть или быть несовместимы с D3.js;</li>
    <li>необходимость адаптировать решения визуализации под изменения различных веб-браузеров и платформ, чтобы сохранить единообразие внешнего вида и работы визуализаций.</li>
    </ul>

    <p>И опять «Hello, World!»:</p>

    <img
      src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658539103c349263cde410e7_658543bdc55a22285539020f/scale_1200"
      alt="">`,
	},
	{
		title: 'JavaScript Фреймворки, Angular',
		date: '21 декабря 2023',
		author: 'Журнал «Код',
		img: 'https://wallpaperbat.com/img/839889-angular-wallpaper-top-free-angular-background.jpg',
		text: `
      <p><a href="https://angularjs.org/">Angular</a> — это компонентная среда для разработки веб-приложений, набор инструментов для сборки, тестирования и отладки кода, а также набор библиотек. Создан инженерами Google в 2010 году. Благодаря Angular разработчики смогли создавать динамические интерактивные веб-сайты, а также одностраничные приложения вместо статических HTML.</p>

      <p>В 2016 году вышла улучшенная версия Angular 2 с полностью обновлённой исходной структурой, улучшенными возможностями внедрения зависимостей, службы ведения журналов и взаимодействия между компонентами.</p>

      <p>Преимущества Angular:</p>

      <ul>
      <li>множество документации, учебных ресурсов и пособий;</li>
      <li>возможность создавать масштабируемые приложения;</li>
      <li>двусторонняя привязка данных — при изменении модели обновляется представление и наоборот;</li>
      <li>возможность использовать компоненты повторно;</li>
      <li>возможность изолированно работать над приложением и данными;</li>
      <li>полная поддержка фреймворка NativeScript для разработки приложений под iOS и Android.</li>
      </ul>

      <p>Недостатки Angular:</p>

      <ul>
      <li>необходимость использовать TypeScript — сложный синтаксис для тех, кто только переходит на Angular с классического JavaScript или jQuery;</li>
      <li>размер и раздутость — около 600 Кб, что может быть слишком много для небольшого приложения;</li>
      <li>возможные сбои в работе динамических приложений из-за сложной структуры и большого размера (решается оптимизацией кода);</li>
      <li>проблемы с поисковой индексацией.</li>
      </ul>

      <p>Привычный «Hello, World!»:</p>

    <img
      src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658539103c349263cde410e7_65854415eec8b90f659b6e0e/scale_1200"
      alt="">`,
	},
	{
		title: 'Лучшие фреймворки и библиотеки JavaScript, которыми пользуются все',
		date: '22 декабря 2023',
		author: 'Журнал «Код',
		img: 'https://dzen.ru/lz5XeGt8f/K9R92bJ52/2f8d1fgEwe4/30GsGQqq6APBcAeAGRKZ53na0yBs2H2whGBbdvWFZojIXRUVmjNiHOeqH9A92EvfgpUh1IOHHjHR8Yh_NEKXKBtWPp_eu2kTDuEWBY1BDCVuzBJwuJ35oEGg2nOzAvJKE4_SFYmk9odl6h3X9hLDGB-PvA1dGIAuRDfd6bGSh_MURzVKRmWrTky4T9KTlh4h8VsT7yGNffeU6Rv1poHjSw1fkxfN4z2D-_1MQzSZRxsexnNAEVTKoY31kWfnHMJ42NQ-zE8rIswFOofZXR4TKLAd0SHqyH18n-ST96BH5EhNVFJbw-53gHg4A4I70U3b0gS0QxOcyinEvNWuI5ZJvt8ascxApG0AjDWOll2QXac32xQsp8Zw8dSrWHLkgWVGzJ5S3APrMwz__0NDOVtFENpF9kiSXc5oRnSep2gbTjgdFvVMQS4pBMD5i9HVlFHkN1SQ52aJ8LeU7ZmwpgpigsfclB8N5fbKM3XABbXRR9meCb8D2dMDpIaxlmRp00J6UJX_j0hkY4VKuIKXVVmVYDIX0yFpTb-8VOvRv63AogFJ3drUz6T8Cbp2QUE1XseSXEKzARSbDy5H9BUg7BBGPdWUOsoMZSEAiLVHk9rfWyY6GxlhJw91OFPhWHYiSWIIDFad2QCkcUY4P8jJvVaJG1RAO8xT1ENhgD_eI-PXQPKYnn4IA-QjzUg4yJMQV14o9xufpCfB_f_eZBi7ZAsljsxZk5GApn1MuX1IjjSQwNJfhn-K0pRHY4j0XGyvl8o239a_AIftYoKHsAYeExUSbLoQlyqiAXp50y-ZPmXJ5ECLVd4YyGO3RPgzgMe9l4LZnAI3AZJRw-gAud1gKV3EP90TfUdI7emNSjwOFlMcnO84ldPsKgA6fVRimnKlT2UAz1dbUMBlO0S7sMiOvVsI1RlC9UFf2QKkwzARoqbcB3LQ3L8DRmQtgoM2xhZS2lFtMpXSb-aJsfHT4tx3b8etQUmWE5HMKr3Jc3NJg7BWSpNbgTqAWhPO7MF5nexm1Qs5Gx7ySAokow0AdQkWVRzTIDIQVyxqBn0-FmJbOiqNakoEHZ3bCmG-CvS7wsm6G4_TEUi3SRLcASaJMZKm5J9CPxGSsgFEraTKAfKBld3WnKh21VytIoh_dhIpVn8kgKvJCd8UVsmp_QG9ssdDsFiB2xqBvI3UWc6oRf1fqeDQjnQQEjZDxyRlCwG2TRUeXtPnuxBb6qxHPfGcrF4_6oLsycOaXFACYX-D_P-AAzGZjRmSyTaCl5nGbIe3HWFo2kk8V509yYkv6keMt8cXEt0eKrpY2eGhRfDwXi0XcioH7olMFVPWiqV3Svv9SgY7l81akUL_SpoRCWSLuh8rK5gCcBNWMgEPJOYGijRFHRZUW2h-0l9l7wJ6PtRgUf3mDyFLzFfdlcXmscz7t4yA_11H2xPIPMueVMwjzvpU4SgbCjyQVfSLQm8uywSywhaQmRTlONBQ7e4Ot3gU5Ri7YIVrx8JQn1EM7PzMMjyHgvwRyt1djbKNExoPp8G3Valpl4O2mFT1x4hq6gQINEdQFV2Q6vcUlu9uDjl-0aCWMm_KL01FmBYQj-d9yjU2yQM6kEhaUkmyT1VTiS8HddekqN-Kd5vUu0xM4ujLTzrL0F5X2mg-2NJtJQhxuRJkE3mnx-4KBZDS1ozmP42x-IkKeZ8L2NvLssLT0A4lBzPZ6-dVj_AWU7uIjiwiSkc2QZZdkBHuMdRYJGnB9HaWJFJ_LEFsg8fZEphDLnMA9PcMB_rYApmcSvIKU9ALpMRwkqsiksP0kBK7DI_lKQ-N9Y9Y1FJbYHdVW-FuifRz0yVatu3KZI_BmVuXxSb9RPO9jAJxkQBZH0A6iByajOdPOpAvaBeJN17W_MuM4qEEgHwN1xLQ3eY_2RJhKEd4Pp2kXjukCqZBTJ8UnAwutYVx-MqIfNzIU5sE84jVG49oyfqWp2PbAj8Wl_qDxKEsRgF2wk',
		text: `<p>https://dzen.ru/a/ZYU5EDw0kmPN5BDn?sid=160791743114893609</p>
		<p>Это база</p>
    <p>Сегодня у нас подборка лучших фреймворков и библиотек для JavaScript. Каждый месяц появляются десятки новых, но
      разработчики продолжают работать с проверенными старыми вариантами. Так показывает опрос 2023 года, проведённый
      Stack Overflow среди 71 тысячи разработчиков.</p>
    <p>Библиотека — это сборник готовых функций и кодов конкретного языка программирования. Одни разработчики создают
      их,
      а другие используют повторно вместо того, чтобы писать их с нуля. Используя готовые библиотеки, вы полностью
      контролируете процесс разработки, упрощаете его и экономите время. При этом библиотека следит за тем, чтобы вы
      делали как можно меньше ошибок.
    </p>
    <p>Фреймворк — это платформа для разработки, которая включает метод работы с файловой системой и базами данных,
      связывания данных с элементами, стилизации компонентов, выполнения запросов и обработки ошибок. При работе с
      фреймворком он задаёт правила, а вы соблюдаете их, наполняя готовый шаблон своим кодом. При этом вы теряете в
      гибкости, зато код работает стабильно, потому что основное фреймворк берёт на себя.</p>
    <h3>Библиотеки</h3>
    <p><a href="https://jquery.com/">jQuery</a> — одна из старейших (первый релиз состоялся в 2006 году), это
      небольшая, быстрая и многофункциональная
      кроссплатформенная библиотека, которая предназначена для простого написания HTML-скриптов на стороне клиента.
      Благодаря API, который работает в большом количестве браузеров, jQuery сильно упрощает обработку событий, создание
      анимации и другие задачи.</p>
    <h4>Преимущества jQuery:</h4>
    <ul>
      <li>хорошая масштабируемость;</li>
      <li>универсальность;</li>
      <li>лёгкая адаптация объектной модели DOM при добавлении и удалении элементов;</li>
      <li>оптимизированный процесс отправки HTTP-запросов;</li>
      <li>возможность использовать динамический контент.</li>
    </ul>
    <h4>Недостатки jQuery:</h4>
    <ul>
      <li>низкая скорость работы;</li>
      <li>наличие более продвинутых альтернатив;</li>
      <li>устаревший API объектной модели.</li>
    </ul>
    <p>Вот такой код выведет на экран надпись «Hello, World!»:</p>
    <img
      src="https://dzen.ru/lz5XeGt8f/K9R92bJ52/2f8d1fgEwe4/30GsGQqq6APBcAeAGRKZ53na0yBs2H2whGBbdvWFZojIXRUVmjNiHOeqH9A92EvfgpUh1IOHHjHR8Yh_NEKXKBtWPp_eu2kTDuEWBY1BDHEtmEexOou54ZfhzHNygudehw_SFYmk9odl6h3X9hLDGB-PvA1dGIAuRDfd6bGSh_MURzVKRmWrTky4T9KTlh4h8VsT7yGNffeU6Rv1poHjSw1fkxfN4z2D-_1MQzSZRxsexnNAEVTKoY31kWfnHMJ42NQ-zE8rIswFOofZXR4TKLAd0SHqyH18n-ST96BH5EhNVFJbw-53gHg4A4I70U3b0gS0QxOcyinEvNWuI5ZJvt8ascxApG0AjDWOll2QXac32xQsp8Zw8dSrWHLkgWVGzJ5S3APrMwz__0NDOVtFENpF9kiSXc5oRnSep2gbTjgdFvVMQS4pBMD5i9HVlFHkN1SQ52aJ8LeU7ZmwpgpigsfclB8N5fbKM3XABbXRR9meCb8D2dMDpIaxlmRp00J6UJX_j0hkY4VKuIKXVVmVYDIX0yFpTb-8VOvRv63AogFJ3drUz6T8Cbp2QUE1XseSXEKzARSbDy5H9BUg7BBGPdWUOsoMZSEAiLVHk9rfWyY6GxlhJw91OFPhWHYiSWIIDFad2QCkcUY4P8jJvVaJG1RAO8xT1ENhgD_eI-PXQPKYnn4IA-QjzUg4yJMQV14o9xufpCfB_f_eZBi7ZAsljsxZk5GApn1MuX1IjjSQwNJfhn-K0pRHY4j0XGyvl8o239a_AIftYoKHsAYeExUSbLoQlyqiAXp50y-ZPmXJ5ECLVd4YyGO3RPgzgMe9l4LZnAI3AZJRw-gAud1gKV3EP90TfUdI7emNSjwOFlMcnO84ldPsKgA6fVRimnKlT2UAz1dbUMBlO0S7sMiOvVsI1RlC9UFf2QKkwzARoqbcB3LQ3L8DRmQtgoM2xhZS2lFtMpXSb-aJsfHT4tx3b8etQUmWE5HMKr3Jc3NJg7BWSpNbgTqAWhPO7MF5nexm1Qs5Gx7ySAokow0AdQkWVRzTIDIQVyxqBn0-FmJbOiqNakoEHZ3bCmG-CvS7wsm6G4_TEUi3SRLcASaJMZKm5J9CPxGSsgFEraTKAfKBld3WnKh21VytIoh_dhIpVn8kgKvJCd8UVsmp_QG9ssdDsFiB2xqBvI3UWc6oRf1fqeDQjnQQEjZDxyRlCwG2TRUeXtPnuxBb6qxHPfGcrF4_6oLsycOaXFACYX-D_P-AAzGZjRmSyTaCl5nGbIe3HWFo2kk8V509yYkv6keMt8cXEt0eKrpY2eGhRfDwXi0XcioH7olMFVPWiqV3Svv9SgY7l81akUL_SpoRCWSLuh8rK5gCcBNWMgEPJOYGijRFHRZUW2h-0l9l7wJ6PtRgUf3mDyFLzFfdlcXmscz7t4yA_11H2xPIPMueVMwjzvpU4SgbCjyQVfSLQm8uywSywhaQmRTlONBQ7e4Ot3gU5Ri7YIVrx8JQn1EM7PzMMjyHgvwRyt1djbKNExoPp8G3Valpl4O2mFT1x4hq6gQINEdQFV2Q6vcUlu9uDjl-0aCWMm_KL01FmBYQj-d9yjU2yQM6kEhaUkmyT1VTiS8HddekqN-Kd5vUu0xM4ujLTzrL0F5X2mg-2NJtJQhxuRJkE3mnx-4KBZDS1ozmP42x-IkKeZ8L2NvLssLT0A4lBzPZ6-dVj_AWU7uIjiwiSkc2QZZdkBHuMdRYJGnB9HaWJFJ_LEFsg8fZEphDLnMA9PcMB_rYApmcSvIKU9ALpMRwkqsiksP0kBK7DI_lKQ-N9Y9Y1FJbYHdVW-FuifRz0yVatu3KZI_BmVuXxSb9RPO9jAJxkQBZH0A6iByajOdPOpAvaBeJN17W_MuM4qEEgHwN1xLQ3eY_2RJhKEd4Pp2kXjukCqZBTJ8UnAwutYVx-MqIfNzIU5sE84jVG49oyfqWp2PbAj8Wl_qDxKEsRgF2wk"
      alt="">`,
	},
	{
		title: 'Лучшие фреймворки и библиотеки JavaScript, которыми пользуются все',
		date: '22 декабря 2023',
		author: 'Журнал «Код',
		img: 'https://dzen.ru/lz5XeGt8f/K9R92bJ52/2f8d1fgEwe4/30GsGQqq6APBcAeAGRKZ53na0yBs2H2whGBbdvWFZojIXRUVmjNiHOeqH9A92EvfgpUh1IOHHjHR8Yh_NEKXKBtWPp_eu2kTDuEWBY1BDCVuzBJwuJ35oEGg2nOzAvJKE4_SFYmk9odl6h3X9hLDGB-PvA1dGIAuRDfd6bGSh_MURzVKRmWrTky4T9KTlh4h8VsT7yGNffeU6Rv1poHjSw1fkxfN4z2D-_1MQzSZRxsexnNAEVTKoY31kWfnHMJ42NQ-zE8rIswFOofZXR4TKLAd0SHqyH18n-ST96BH5EhNVFJbw-53gHg4A4I70U3b0gS0QxOcyinEvNWuI5ZJvt8ascxApG0AjDWOll2QXac32xQsp8Zw8dSrWHLkgWVGzJ5S3APrMwz__0NDOVtFENpF9kiSXc5oRnSep2gbTjgdFvVMQS4pBMD5i9HVlFHkN1SQ52aJ8LeU7ZmwpgpigsfclB8N5fbKM3XABbXRR9meCb8D2dMDpIaxlmRp00J6UJX_j0hkY4VKuIKXVVmVYDIX0yFpTb-8VOvRv63AogFJ3drUz6T8Cbp2QUE1XseSXEKzARSbDy5H9BUg7BBGPdWUOsoMZSEAiLVHk9rfWyY6GxlhJw91OFPhWHYiSWIIDFad2QCkcUY4P8jJvVaJG1RAO8xT1ENhgD_eI-PXQPKYnn4IA-QjzUg4yJMQV14o9xufpCfB_f_eZBi7ZAsljsxZk5GApn1MuX1IjjSQwNJfhn-K0pRHY4j0XGyvl8o239a_AIftYoKHsAYeExUSbLoQlyqiAXp50y-ZPmXJ5ECLVd4YyGO3RPgzgMe9l4LZnAI3AZJRw-gAud1gKV3EP90TfUdI7emNSjwOFlMcnO84ldPsKgA6fVRimnKlT2UAz1dbUMBlO0S7sMiOvVsI1RlC9UFf2QKkwzARoqbcB3LQ3L8DRmQtgoM2xhZS2lFtMpXSb-aJsfHT4tx3b8etQUmWE5HMKr3Jc3NJg7BWSpNbgTqAWhPO7MF5nexm1Qs5Gx7ySAokow0AdQkWVRzTIDIQVyxqBn0-FmJbOiqNakoEHZ3bCmG-CvS7wsm6G4_TEUi3SRLcASaJMZKm5J9CPxGSsgFEraTKAfKBld3WnKh21VytIoh_dhIpVn8kgKvJCd8UVsmp_QG9ssdDsFiB2xqBvI3UWc6oRf1fqeDQjnQQEjZDxyRlCwG2TRUeXtPnuxBb6qxHPfGcrF4_6oLsycOaXFACYX-D_P-AAzGZjRmSyTaCl5nGbIe3HWFo2kk8V509yYkv6keMt8cXEt0eKrpY2eGhRfDwXi0XcioH7olMFVPWiqV3Svv9SgY7l81akUL_SpoRCWSLuh8rK5gCcBNWMgEPJOYGijRFHRZUW2h-0l9l7wJ6PtRgUf3mDyFLzFfdlcXmscz7t4yA_11H2xPIPMueVMwjzvpU4SgbCjyQVfSLQm8uywSywhaQmRTlONBQ7e4Ot3gU5Ri7YIVrx8JQn1EM7PzMMjyHgvwRyt1djbKNExoPp8G3Valpl4O2mFT1x4hq6gQINEdQFV2Q6vcUlu9uDjl-0aCWMm_KL01FmBYQj-d9yjU2yQM6kEhaUkmyT1VTiS8HddekqN-Kd5vUu0xM4ujLTzrL0F5X2mg-2NJtJQhxuRJkE3mnx-4KBZDS1ozmP42x-IkKeZ8L2NvLssLT0A4lBzPZ6-dVj_AWU7uIjiwiSkc2QZZdkBHuMdRYJGnB9HaWJFJ_LEFsg8fZEphDLnMA9PcMB_rYApmcSvIKU9ALpMRwkqsiksP0kBK7DI_lKQ-N9Y9Y1FJbYHdVW-FuifRz0yVatu3KZI_BmVuXxSb9RPO9jAJxkQBZH0A6iByajOdPOpAvaBeJN17W_MuM4qEEgHwN1xLQ3eY_2RJhKEd4Pp2kXjukCqZBTJ8UnAwutYVx-MqIfNzIU5sE84jVG49oyfqWp2PbAj8Wl_qDxKEsRgF2wk',
		text: `<p>https://dzen.ru/a/ZYU5EDw0kmPN5BDn?sid=160791743114893609</p>
		<p>Это база</p>
    <p>Сегодня у нас подборка лучших фреймворков и библиотек для JavaScript. Каждый месяц появляются десятки новых, но
      разработчики продолжают работать с проверенными старыми вариантами. Так показывает опрос 2023 года, проведённый
      Stack Overflow среди 71 тысячи разработчиков.</p>
    <p>Библиотека — это сборник готовых функций и кодов конкретного языка программирования. Одни разработчики создают
      их,
      а другие используют повторно вместо того, чтобы писать их с нуля. Используя готовые библиотеки, вы полностью
      контролируете процесс разработки, упрощаете его и экономите время. При этом библиотека следит за тем, чтобы вы
      делали как можно меньше ошибок.
    </p>
    <p>Фреймворк — это платформа для разработки, которая включает метод работы с файловой системой и базами данных,
      связывания данных с элементами, стилизации компонентов, выполнения запросов и обработки ошибок. При работе с
      фреймворком он задаёт правила, а вы соблюдаете их, наполняя готовый шаблон своим кодом. При этом вы теряете в
      гибкости, зато код работает стабильно, потому что основное фреймворк берёт на себя.</p>
    <h3>Библиотеки</h3>
    <p><a href="https://jquery.com/">jQuery</a> — одна из старейших (первый релиз состоялся в 2006 году), это
      небольшая, быстрая и многофункциональная
      кроссплатформенная библиотека, которая предназначена для простого написания HTML-скриптов на стороне клиента.
      Благодаря API, который работает в большом количестве браузеров, jQuery сильно упрощает обработку событий, создание
      анимации и другие задачи.</p>
    <h4>Преимущества jQuery:</h4>
    <ul>
      <li>хорошая масштабируемость;</li>
      <li>универсальность;</li>
      <li>лёгкая адаптация объектной модели DOM при добавлении и удалении элементов;</li>
      <li>оптимизированный процесс отправки HTTP-запросов;</li>
      <li>возможность использовать динамический контент.</li>
    </ul>
    <h4>Недостатки jQuery:</h4>
    <ul>
      <li>низкая скорость работы;</li>
      <li>наличие более продвинутых альтернатив;</li>
      <li>устаревший API объектной модели.</li>
    </ul>
    <p>Вот такой код выведет на экран надпись «Hello, World!»:</p>
    <img
      src="https://dzen.ru/lz5XeGt8f/K9R92bJ52/2f8d1fgEwe4/30GsGQqq6APBcAeAGRKZ53na0yBs2H2whGBbdvWFZojIXRUVmjNiHOeqH9A92EvfgpUh1IOHHjHR8Yh_NEKXKBtWPp_eu2kTDuEWBY1BDHEtmEexOou54ZfhzHNygudehw_SFYmk9odl6h3X9hLDGB-PvA1dGIAuRDfd6bGSh_MURzVKRmWrTky4T9KTlh4h8VsT7yGNffeU6Rv1poHjSw1fkxfN4z2D-_1MQzSZRxsexnNAEVTKoY31kWfnHMJ42NQ-zE8rIswFOofZXR4TKLAd0SHqyH18n-ST96BH5EhNVFJbw-53gHg4A4I70U3b0gS0QxOcyinEvNWuI5ZJvt8ascxApG0AjDWOll2QXac32xQsp8Zw8dSrWHLkgWVGzJ5S3APrMwz__0NDOVtFENpF9kiSXc5oRnSep2gbTjgdFvVMQS4pBMD5i9HVlFHkN1SQ52aJ8LeU7ZmwpgpigsfclB8N5fbKM3XABbXRR9meCb8D2dMDpIaxlmRp00J6UJX_j0hkY4VKuIKXVVmVYDIX0yFpTb-8VOvRv63AogFJ3drUz6T8Cbp2QUE1XseSXEKzARSbDy5H9BUg7BBGPdWUOsoMZSEAiLVHk9rfWyY6GxlhJw91OFPhWHYiSWIIDFad2QCkcUY4P8jJvVaJG1RAO8xT1ENhgD_eI-PXQPKYnn4IA-QjzUg4yJMQV14o9xufpCfB_f_eZBi7ZAsljsxZk5GApn1MuX1IjjSQwNJfhn-K0pRHY4j0XGyvl8o239a_AIftYoKHsAYeExUSbLoQlyqiAXp50y-ZPmXJ5ECLVd4YyGO3RPgzgMe9l4LZnAI3AZJRw-gAud1gKV3EP90TfUdI7emNSjwOFlMcnO84ldPsKgA6fVRimnKlT2UAz1dbUMBlO0S7sMiOvVsI1RlC9UFf2QKkwzARoqbcB3LQ3L8DRmQtgoM2xhZS2lFtMpXSb-aJsfHT4tx3b8etQUmWE5HMKr3Jc3NJg7BWSpNbgTqAWhPO7MF5nexm1Qs5Gx7ySAokow0AdQkWVRzTIDIQVyxqBn0-FmJbOiqNakoEHZ3bCmG-CvS7wsm6G4_TEUi3SRLcASaJMZKm5J9CPxGSsgFEraTKAfKBld3WnKh21VytIoh_dhIpVn8kgKvJCd8UVsmp_QG9ssdDsFiB2xqBvI3UWc6oRf1fqeDQjnQQEjZDxyRlCwG2TRUeXtPnuxBb6qxHPfGcrF4_6oLsycOaXFACYX-D_P-AAzGZjRmSyTaCl5nGbIe3HWFo2kk8V509yYkv6keMt8cXEt0eKrpY2eGhRfDwXi0XcioH7olMFVPWiqV3Svv9SgY7l81akUL_SpoRCWSLuh8rK5gCcBNWMgEPJOYGijRFHRZUW2h-0l9l7wJ6PtRgUf3mDyFLzFfdlcXmscz7t4yA_11H2xPIPMueVMwjzvpU4SgbCjyQVfSLQm8uywSywhaQmRTlONBQ7e4Ot3gU5Ri7YIVrx8JQn1EM7PzMMjyHgvwRyt1djbKNExoPp8G3Valpl4O2mFT1x4hq6gQINEdQFV2Q6vcUlu9uDjl-0aCWMm_KL01FmBYQj-d9yjU2yQM6kEhaUkmyT1VTiS8HddekqN-Kd5vUu0xM4ujLTzrL0F5X2mg-2NJtJQhxuRJkE3mnx-4KBZDS1ozmP42x-IkKeZ8L2NvLssLT0A4lBzPZ6-dVj_AWU7uIjiwiSkc2QZZdkBHuMdRYJGnB9HaWJFJ_LEFsg8fZEphDLnMA9PcMB_rYApmcSvIKU9ALpMRwkqsiksP0kBK7DI_lKQ-N9Y9Y1FJbYHdVW-FuifRz0yVatu3KZI_BmVuXxSb9RPO9jAJxkQBZH0A6iByajOdPOpAvaBeJN17W_MuM4qEEgHwN1xLQ3eY_2RJhKEd4Pp2kXjukCqZBTJ8UnAwutYVx-MqIfNzIU5sE84jVG49oyfqWp2PbAj8Wl_qDxKEsRgF2wk"
      alt="">`,
	},
]

export const news = [
	{
		title: '10 изменений JavaScript за 2023 год, которые вы могли упустить',
		date: '30 янв 2024',
		author: 'tproger',
		img: 'https://yrokiwp.ru/wp-content/uploads/2023/03/java-modern.jpeg',
		text: `<p>Рассказали о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Блогер Fireship рассказал о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь в ролике идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Вот, о чём идёт речь в видео:</p>

<ol>
<li>2023 год оказался бурным: обвал банка, покупка Twitter Илоном Маском, увольнения друзей автора, аресты крипто-энтузиастов, выпуск Cybertruck Tesla и замена ChatGPT на рабочих местах.</li>
<li>В JavaScript произошли значительные изменения: почти каждый фреймворк решил обновиться в 2023 году.</li>
<li>Новая функция ECMAScript ‘object group by’ позволяет группировать объекты по определенному признаку, например, по возрасту.</li>
<li>Добавлены методы ‘array to sorted’, ‘to spliced’ и ‘to reversed’, которые не изменяют исходный массив, в отличие от ‘sort’ и ‘reverse’.</li>
<li>В HTML появились новые элементы, такие как тег ‘search’ для поисковых форм и элемент ‘dialogue’ для модальных диалогов.</li>
<li>iOS наконец разрешила веб-приложениям отправлять push-уведомления.</li>
<li>Next.js обновился до версии 13.4 с новой функцией ‘app directory’, позволяющей получать данные непосредственно в React-компонентах.</li>
<li>Фреймворк Nuxt.js в экосистеме Vue.js обновил свои инструменты разработчика и предложил компоненты через унифицированную экосистему JavaScript-инструментов.</li>
<li>Svelte ввел новую функцию ‘Runes’, изменяющую подход к реактивным переменным и управлению состоянием.</li>
<li>Angular представил новый синтаксис шаблонов, сигналы и ‘deferrable views’ для ленивой загрузки, а также обновил свой логотип.</li>
<li>Node.js улучшил модель разрешений и добавил собственный WebSocket клиент.</li>
<li>Bun — новая среда выполнения JavaScript, написанная на Zig, обещает улучшенный опыт разработки и высокую производительность.</li>
<li>HTMX получил награду ‘JavaScript Framework of the Year’, предлагая подход, сокращающий использование JavaScript.</li>
</ol>`,
	},
	{
		title: '10 изменений JavaScript за 2023 год, которые вы могли упустить',
		date: '30 янв 2024',
		author: 'tproger',
		img: 'https://yrokiwp.ru/wp-content/uploads/2023/03/java-modern.jpeg',
		text: `<p>Рассказали о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Блогер Fireship рассказал о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь в ролике идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Вот, о чём идёт речь в видео:</p>

<ol>
<li>2023 год оказался бурным: обвал банка, покупка Twitter Илоном Маском, увольнения друзей автора, аресты крипто-энтузиастов, выпуск Cybertruck Tesla и замена ChatGPT на рабочих местах.</li>
<li>В JavaScript произошли значительные изменения: почти каждый фреймворк решил обновиться в 2023 году.</li>
<li>Новая функция ECMAScript ‘object group by’ позволяет группировать объекты по определенному признаку, например, по возрасту.</li>
<li>Добавлены методы ‘array to sorted’, ‘to spliced’ и ‘to reversed’, которые не изменяют исходный массив, в отличие от ‘sort’ и ‘reverse’.</li>
<li>В HTML появились новые элементы, такие как тег ‘search’ для поисковых форм и элемент ‘dialogue’ для модальных диалогов.</li>
<li>iOS наконец разрешила веб-приложениям отправлять push-уведомления.</li>
<li>Next.js обновился до версии 13.4 с новой функцией ‘app directory’, позволяющей получать данные непосредственно в React-компонентах.</li>
<li>Фреймворк Nuxt.js в экосистеме Vue.js обновил свои инструменты разработчика и предложил компоненты через унифицированную экосистему JavaScript-инструментов.</li>
<li>Svelte ввел новую функцию ‘Runes’, изменяющую подход к реактивным переменным и управлению состоянием.</li>
<li>Angular представил новый синтаксис шаблонов, сигналы и ‘deferrable views’ для ленивой загрузки, а также обновил свой логотип.</li>
<li>Node.js улучшил модель разрешений и добавил собственный WebSocket клиент.</li>
<li>Bun — новая среда выполнения JavaScript, написанная на Zig, обещает улучшенный опыт разработки и высокую производительность.</li>
<li>HTMX получил награду ‘JavaScript Framework of the Year’, предлагая подход, сокращающий использование JavaScript.</li>
</ol>`,
	},
	{
		title: '10 изменений JavaScript за 2023 год, которые вы могли упустить',
		date: '30 янв 2024',
		author: 'tproger',
		img: 'https://yrokiwp.ru/wp-content/uploads/2023/03/java-modern.jpeg',
		text: `<p>Рассказали о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Блогер Fireship рассказал о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь в ролике идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Вот, о чём идёт речь в видео:</p>

<ol>
<li>2023 год оказался бурным: обвал банка, покупка Twitter Илоном Маском, увольнения друзей автора, аресты крипто-энтузиастов, выпуск Cybertruck Tesla и замена ChatGPT на рабочих местах.</li>
<li>В JavaScript произошли значительные изменения: почти каждый фреймворк решил обновиться в 2023 году.</li>
<li>Новая функция ECMAScript ‘object group by’ позволяет группировать объекты по определенному признаку, например, по возрасту.</li>
<li>Добавлены методы ‘array to sorted’, ‘to spliced’ и ‘to reversed’, которые не изменяют исходный массив, в отличие от ‘sort’ и ‘reverse’.</li>
<li>В HTML появились новые элементы, такие как тег ‘search’ для поисковых форм и элемент ‘dialogue’ для модальных диалогов.</li>
<li>iOS наконец разрешила веб-приложениям отправлять push-уведомления.</li>
<li>Next.js обновился до версии 13.4 с новой функцией ‘app directory’, позволяющей получать данные непосредственно в React-компонентах.</li>
<li>Фреймворк Nuxt.js в экосистеме Vue.js обновил свои инструменты разработчика и предложил компоненты через унифицированную экосистему JavaScript-инструментов.</li>
<li>Svelte ввел новую функцию ‘Runes’, изменяющую подход к реактивным переменным и управлению состоянием.</li>
<li>Angular представил новый синтаксис шаблонов, сигналы и ‘deferrable views’ для ленивой загрузки, а также обновил свой логотип.</li>
<li>Node.js улучшил модель разрешений и добавил собственный WebSocket клиент.</li>
<li>Bun — новая среда выполнения JavaScript, написанная на Zig, обещает улучшенный опыт разработки и высокую производительность.</li>
<li>HTMX получил награду ‘JavaScript Framework of the Year’, предлагая подход, сокращающий использование JavaScript.</li>
</ol>`,
	},
	{
		title: '10 изменений JavaScript за 2023 год, которые вы могли упустить',
		date: '30 янв 2024',
		author: 'tproger',
		img: 'https://yrokiwp.ru/wp-content/uploads/2023/03/java-modern.jpeg',
		text: `<p>Рассказали о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Блогер Fireship рассказал о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь в ролике идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Вот, о чём идёт речь в видео:</p>

<ol>
<li>2023 год оказался бурным: обвал банка, покупка Twitter Илоном Маском, увольнения друзей автора, аресты крипто-энтузиастов, выпуск Cybertruck Tesla и замена ChatGPT на рабочих местах.</li>
<li>В JavaScript произошли значительные изменения: почти каждый фреймворк решил обновиться в 2023 году.</li>
<li>Новая функция ECMAScript ‘object group by’ позволяет группировать объекты по определенному признаку, например, по возрасту.</li>
<li>Добавлены методы ‘array to sorted’, ‘to spliced’ и ‘to reversed’, которые не изменяют исходный массив, в отличие от ‘sort’ и ‘reverse’.</li>
<li>В HTML появились новые элементы, такие как тег ‘search’ для поисковых форм и элемент ‘dialogue’ для модальных диалогов.</li>
<li>iOS наконец разрешила веб-приложениям отправлять push-уведомления.</li>
<li>Next.js обновился до версии 13.4 с новой функцией ‘app directory’, позволяющей получать данные непосредственно в React-компонентах.</li>
<li>Фреймворк Nuxt.js в экосистеме Vue.js обновил свои инструменты разработчика и предложил компоненты через унифицированную экосистему JavaScript-инструментов.</li>
<li>Svelte ввел новую функцию ‘Runes’, изменяющую подход к реактивным переменным и управлению состоянием.</li>
<li>Angular представил новый синтаксис шаблонов, сигналы и ‘deferrable views’ для ленивой загрузки, а также обновил свой логотип.</li>
<li>Node.js улучшил модель разрешений и добавил собственный WebSocket клиент.</li>
<li>Bun — новая среда выполнения JavaScript, написанная на Zig, обещает улучшенный опыт разработки и высокую производительность.</li>
<li>HTMX получил награду ‘JavaScript Framework of the Year’, предлагая подход, сокращающий использование JavaScript.</li>
</ol>`,
	},
	{
		title: '10 изменений JavaScript за 2023 год, которые вы могли упустить',
		date: '30 янв 2024',
		author: 'tproger',
		img: 'https://yrokiwp.ru/wp-content/uploads/2023/03/java-modern.jpeg',
		text: `<p>Рассказали о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Блогер Fireship рассказал о 10 изменениях в JavaScript и веб-разработке в 2023 году, которые вы могли пропустить. Речь в ролике идёт о Next.js, React, Angular, Vue, и Node.js.</p>

<p>Вот, о чём идёт речь в видео:</p>

<ol>
<li>2023 год оказался бурным: обвал банка, покупка Twitter Илоном Маском, увольнения друзей автора, аресты крипто-энтузиастов, выпуск Cybertruck Tesla и замена ChatGPT на рабочих местах.</li>
<li>В JavaScript произошли значительные изменения: почти каждый фреймворк решил обновиться в 2023 году.</li>
<li>Новая функция ECMAScript ‘object group by’ позволяет группировать объекты по определенному признаку, например, по возрасту.</li>
<li>Добавлены методы ‘array to sorted’, ‘to spliced’ и ‘to reversed’, которые не изменяют исходный массив, в отличие от ‘sort’ и ‘reverse’.</li>
<li>В HTML появились новые элементы, такие как тег ‘search’ для поисковых форм и элемент ‘dialogue’ для модальных диалогов.</li>
<li>iOS наконец разрешила веб-приложениям отправлять push-уведомления.</li>
<li>Next.js обновился до версии 13.4 с новой функцией ‘app directory’, позволяющей получать данные непосредственно в React-компонентах.</li>
<li>Фреймворк Nuxt.js в экосистеме Vue.js обновил свои инструменты разработчика и предложил компоненты через унифицированную экосистему JavaScript-инструментов.</li>
<li>Svelte ввел новую функцию ‘Runes’, изменяющую подход к реактивным переменным и управлению состоянием.</li>
<li>Angular представил новый синтаксис шаблонов, сигналы и ‘deferrable views’ для ленивой загрузки, а также обновил свой логотип.</li>
<li>Node.js улучшил модель разрешений и добавил собственный WebSocket клиент.</li>
<li>Bun — новая среда выполнения JavaScript, написанная на Zig, обещает улучшенный опыт разработки и высокую производительность.</li>
<li>HTMX получил награду ‘JavaScript Framework of the Year’, предлагая подход, сокращающий использование JavaScript.</li>
</ol>`,
	},
]
