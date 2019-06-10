export const messages = {
  'en': {
    'menu.wallboard': 'wallboard',
    'menu.journal': 'journal',
    'menu.about': 'about',
    'menu.applications': 'applications',

    'menu.sidebar.Details': 'Details',
    'menu.sidebar.Statistics': 'Statistics',

    'custom.statistics_endpoint.stats.title': 'Stats title',
    'custom.statistics_endpoint.stats.table.path': 'Path',
    'custom.statistics_endpoint.stats.table.count': 'Count',
    'custom.statistics_endpoint.stats.table.total_ms': 'Total [ms]',
    'custom.statistics_endpoint.stats.table.max_ms': 'Max [ms]',
    'custom.statistics_endpoint.stats.table.avg_ms': 'Average [ms]',
    'custom.statistics_endpoint.stats.table.percentile': 'Percentile',
    'custom.statistics_endpoint.exceptions.title': 'Exceptions',
    'custom.statistics_endpoint.exceptions.table.exception': 'Exception',
    'custom.statistics_endpoint.exceptions.table.count': 'Count',

    'view.applications.header.applications': 'Applications',
    'view.applications.header.applications-loading': 'Loading applications...',
    'view.applications.header.server_conn_failed': 'Server connection failed.',
    'view.applications.header.instances': 'Instances',
    'view.applications.header.status': 'Status',
    'view.applications.header.status.allup': 'all up',
    'view.applications.header.status.instances_down': 'instances down',
    'view.applications.header.none_registered': 'none registered',
    'view.applications.list_title.status.UP': 'UP',
    'view.applications.list_title.status.RESTRICTED': 'RESTRICTED',
    'view.applications.list_title.status.DOWN': 'DOWN',
    'view.applications.list_title.status.OUT_OF_SERVICE': 'OUT_OF_SERVICE',
    'view.applications.list_title.status.OFFLINE': 'OFFLINE',

    'view.wallboard.applications.instances': 'instances',

    'view.instances.details_index.fetching_metrix_failed': 'Fetching metrics index failed.',
    'view.instances.details_cache.title': 'Cache',
    'view.instances.details_cache.fetching_cache_failed': 'Fetching cache metrics failed.',
    'view.instances.details_cache.hits': 'Hits',
    'view.instances.details_cache.misses': 'Misses',
    'view.instances.details_cache.hit_ratio': 'Hit ratio',
    'view.instances.details_cache.size': 'Size',

    'view.instances.details_datasource.title': 'Datasource',
    'view.instances.details_datasource.fetching_datasource_failed': 'Fetching datasource metrics failed.',
    'view.instances.details_datasource.active_conns': 'Active connections',
    'view.instances.details_datasource.min_conns': 'Min connections',
    'view.instances.details_datasource.max_conns': 'Max connections',
    'view.instances.details_datasource.max_conns_unlimited': 'unlimited',

    'view.instances.details_gc.title': 'Garbage Collection Pauses',
    'view.instances.details_gc.fetching_gc_failed': 'Fetching GC metrics failed.',
    'view.instances.details_gc.count': 'Count',
    'view.instances.details_gc.total_time': 'Total time spent',
    'view.instances.details_gc.max_time': 'Max time spent',

    'view.instances.details_health.title': 'Health',
    'view.instances.details_health.fetching_health_failed': 'Fetching live health status failed. This is the last known information.',
    'view.instances.details_health.health_details_name_instance': 'Instance',

    'view.instances.details_info.title': 'Info',
    'view.instances.details_info.fetching_info_failed': 'Fetching live info failed. This is the last known information.',
    'view.instances.details_info.no_info': 'No info provided.',

    'view.instances.details_memory.title': 'Memory',
    'view.instances.details_memory.fetching_memory_failed': 'Fetching memory metrics failed.',
    'view.instances.details_memory.metaspace': 'Metaspace',
    'view.instances.details_memory.used': 'Used',
    'view.instances.details_memory.size': 'Size',
    'view.instances.details_memory.max': 'Max',

    'view.instances.details_metadata.title': 'Metadata',
    'view.instances.details_metadata.no_provided': 'No metadata provided.',

    'view.instances.details_process.title': 'Process',
    'view.instances.details_process.fetching_process_failed': 'Fetching process metrics failed.',
    'view.instances.details_process.pid': 'PID',
    'view.instances.details_process.uptime': 'Uptime',
    'view.instances.details_process.cpu_proc': 'Process CPU Usage',
    'view.instances.details_process.cpu_sys': 'System CPU Usage',
    'view.instances.details_process.cpus': 'CPUs',

    'view.instances.details_threads.title': 'Threads',
    'view.instances.details_threads.fetching_threads_failed': 'Fetching threads metrics failed.',
    'view.instances.details_threads.live': 'Live',
    'view.instances.details_threads.daemon': 'Daemon',
    'view.instances.details_threads.peak_live': 'Peak Live',

    'journal.title': 'Event Journal',
    'journal.conn_failed': 'Server connection failed.',
    'journal.application': 'Application',
    'journal.instance': 'Instance',
    'journal.time': 'Time',
    'journal.event': 'Event'
  },
  'ru': {
    'menu.wallboard': 'Стена',
    'menu.journal': 'Журнал',
    'menu.about': 'О нас',
    'menu.applications': 'Приложения',

    'menu.sidebar.Details': 'Подробности',
    'menu.sidebar.Statistics': 'Статистика',

    'custom.statistics_endpoint.stats.title': 'Наименование статистического показателя',
    'custom.statistics_endpoint.stats.table.path': 'Путь',
    'custom.statistics_endpoint.stats.table.count': 'Подсчет',
    'custom.statistics_endpoint.stats.table.total_ms': 'Итого [мс]',
    'custom.statistics_endpoint.stats.table.max_ms': 'Максимально [мс]',
    'custom.statistics_endpoint.stats.table.avg_ms': 'В среднем [мс]',
    'custom.statistics_endpoint.stats.table.percentile': 'Процентиль',
    'custom.statistics_endpoint.exceptions.title': 'Исключения',
    'custom.statistics_endpoint.exceptions.table.exception': 'Исключение',
    'custom.statistics_endpoint.exceptions.table.count': 'Подсчет',

    'view.applications.header.applications': 'Приложения',
    'view.applications.header.applications-loading': 'Запуск приложений…',
    'view.applications.header.server_conn_failed': 'Сбой подключения к серверу',
    'view.applications.header.instances': 'Экземпляры',
    'view.applications.header.status': 'Статус',
    'view.applications.header.status.allup': 'комплексно',
    'view.applications.header.status.instances_down': 'экземпляры не доступны',
    'view.applications.header.none_registered': 'не зарегистрировано ни одного',
    'view.applications.list_title.status.UP': 'ДОСТУПЕН',
    'view.applications.list_title.status.RESTRICTED': 'ОГРАНИЧЕН',
    'view.applications.list_title.status.DOWN': ' НЕ ДОСТУПЕН',
    'view.applications.list_title.status.OUT_OF_SERVICE': 'В НЕРАБОЧЕМ СОСТОЯНИИ',
    'view.applications.list_title.status.OFFLINE': 'В АВТОНОМНОМ РЕЖИМЕ',

    'view.wallboard.applications.instances': 'Экземпляры',

    'view.instances.details_index.fetching_metrix_failed': 'Ошибка при осуществлении выборки по индексу метрик',
    'view.instances.details_cache.title': 'Кэш',
    'view.instances.details_cache.fetching_cache_failed': 'Ошибка при осуществлении выборки метрик кэша',
    'view.instances.details_cache.hits': 'попадания в кэш',
    'view.instances.details_cache.misses': 'промахи',
    'view.instances.details_cache.hit_ratio': 'коэффициент попаданий в кэш',
    'view.instances.details_cache.size': 'Размер',

    'view.instances.details_datasource.title': 'Источник данных',
    'view.instances.details_datasource.fetching_datasource_failed': 'Ошибка при осуществлении выборки метрик источников данных',
    'view.instances.details_datasource.active_conns': 'Активные соединения',
    'view.instances.details_datasource.min_conns': 'Минимальное число соединений',
    'view.instances.details_datasource.max_conns': 'Максимальное число соединений ',
    'view.instances.details_datasource.max_conns_unlimited': 'не ограничено',

    'view.instances.details_gc.title': 'Паузы, вызванные работой механизма автоматического управления памятью',
    'view.instances.details_gc.fetching_gc_failed': 'Ошибка при осуществлении выборки метрик автоматического управления памятью',
    'view.instances.details_gc.count': 'Подсчет',
    'view.instances.details_gc.total_time': 'Общее потраченное время',
    'view.instances.details_gc.max_time': 'Максимальное потраченное время',

    'view.instances.details_health.title': 'Здоровье',
    'view.instances.details_health.fetching_health_failed': 'Ошибка при осуществлении выборки текущего состояния здоровья. Это – последняя имеющаяся информация',
    'view.instances.details_health.health_details_name_instance': 'Экземпляр',

    'view.instances.details_info.title': 'Информация',
    'view.instances.details_info.fetching_info_failed': 'Выборка Ошибка при осуществлении выборки текущей информации. Это – последняя имеющаяся информация',
    'view.instances.details_info.no_info': 'Информация не предоставлена',

    'view.instances.details_memory.title': 'Память',
    'view.instances.details_memory.fetching_memory_failed': 'Ошибка при осуществлении выборки метрик памяти',
    'view.instances.details_memory.metaspace': 'Метапространство',
    'view.instances.details_memory.used': 'использовано',
    'view.instances.details_memory.size': 'размер',
    'view.instances.details_memory.max': 'Максимально',

    'view.instances.details_metadata.title': 'Метаданные',
    'view.instances.details_metadata.no_provided': 'Метаданные не предоставлены',

    'view.instances.details_process.title': 'Процесс',
    'view.instances.details_process.fetching_process_failed': 'Ошибка при осуществлении выборки метрик процесса',
    'view.instances.details_process.pid': 'ПИД',
    'view.instances.details_process.uptime': 'Продолжительность работы',
    'view.instances.details_process.cpu_proc': 'Использование ЦП при осуществлении процесса',
    'view.instances.details_process.cpu_sys': 'Использование ЦП системой',
    'view.instances.details_process.cpus': 'ЦП',

    'view.instances.details_threads.title': 'Потоки',
    'view.instances.details_threads.fetching_threads_failed': 'Ошибка при осуществлении выборки метрик потоков',
    'view.instances.details_threads.live': 'активный',
    'view.instances.details_threads.daemon': 'демон',
    'view.instances.details_threads.peak_live': 'активных в пике',

    'journal.title': 'Журнал событий ',
    'journal.conn_failed': 'Сбой подключения к серверу.',
    'journal.application': 'Приложение',
    'journal.instance': 'Экземпляр',
    'journal.time': 'Время',
    'journal.event': 'Событие'
  }
};
