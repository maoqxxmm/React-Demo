import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function arrayToMap (array) {
  return array.map(object => {
    return Map(object)
  })
}

const smartProjectId = {
  all: 'tasks',
  today: 'today',
  tomorrow: 'tomorrow',
  week: 'week',
  tkcalendar: 'calendar',
  assignedme: 'assignedme',
  summary: 'summary',
  completed: 'completed',
  trash: 'trash',
  subscribe: 'subscribe-calendar',
  subscribeAccount: 'subscribe-account-calendar'
}
const SmartProjectAll = {
  'id': smartProjectId.all,
  'name': '所有',
  'status': 'show',
  'listType': 'non-project',
  'taskType': 'tasks',
  'order': 0
};

const SmartProjectToday = {
  'id': smartProjectId.today,
  'name': '今天',
  'status': 'show',
  'listType': 'non-project',
  'taskType': 'today',
  'order': 1
};

const SmartProjectTomorrow = {
  'id': smartProjectId.tomorrow,
  'name': '明天',
  'status': 'hide',
  'listType': 'non-project',
  'taskType': 'tomorrow',
  'order': 2
};

// 日历视图
const SmartProjectTKCalendar = {
  'id': smartProjectId.tkcalendar,
  'name': '日历',
  'status': 'show',
  'listType': 'non-project',
  'taskType': 'calendar',
  'order': 4
};

// 指派给我
const SmartProjectAssignedMe = {
  'id': smartProjectId.assignedme,
  'name': '分配给我',
  'status': 'auto',
  'listType': 'non-project',
  'taskType': 'assignedme',
  'order': 5
};

// 摘要
const SmartProjectSummary = {
  'id': smartProjectId.summary,
  'name': '摘要',
  'listType': 'non-project',
  'taskType': 'summary',
  'status': 'show'
};

const SmartProjectCompleted = {
  'id': smartProjectId.completed,
  'name': '已完成',
  'listType': 'non-project',
  'taskType': 'completed',
  'status': 'show'
};

const SmartProjectTrash = {
  'id': smartProjectId.trash,
  'name': '垃圾桶',
  'listType': 'non-project',
  'taskType': 'trash',
  'status': 'show'
};

const SmartCollection = [
  SmartProjectAll,
  SmartProjectToday,
  SmartProjectTomorrow,
  SmartProjectTKCalendar,
  SmartProjectAssignedMe,
  SmartProjectCompleted,
  SmartProjectTrash,
  SmartProjectSummary
]

function smartProjectList(state = List(arrayToMap(SmartCollection)), action) {
    switch (action.type) {
        case (types.SORT_LIST):
            return state.push(Map({
                id: action.id,
                title: action.text,
                status: 0
            }));
        case (types.SET_VISIBLE):
            return state.map(task => {
                if (task.get('id') === action.id) {
                    return task.update('status', v => {
                        return v === 0 ? 2 : 0;
                    });
                } else {
                    return task;
                }
            })  
        default:
            return state;
    }
}

const ProjectCollection = [
  {
    id: "57b52819d4c6a155007df63c",
    name: "test1-1",
    isOwner: true,
    color: "#FE8566",
    inAll: true,
    sortOrder: 27487790694400,
    sortType: "sortOrder",
    userCount: 1,
    etag: "9swc0ncy",
    modifiedTime: "2017-12-07T08:35:24.881+0000",
    closed: null,
    muted: false,
    groupId: "57e1a52f515073048b1cb629"
    },
    {
    id: "57b5282fd4c6a155007df63f",
    name: "test1-2",
    isOwner: true,
    color: "#FFD422",
    inAll: true,
    sortOrder: 28587302322176,
    sortType: "sortOrder",
    userCount: 1,
    etag: "xwjjg9dc",
    modifiedTime: "2017-12-07T08:35:24.913+0000",
    closed: null,
    muted: false,
    groupId: "57e1a52f515073048b1cb629"
    },
    {
    id: "57b52eccd4c6a155007df679",
    name: "test1-3",
    isOwner: true,
    color: "#4EC653",
    inAll: true,
    sortOrder: 7971459301376,
    sortType: "sortOrder",
    userCount: 1,
    etag: "6qr9h8gc",
    modifiedTime: "2017-03-07T15:16:38.694+0000",
    closed: true,
    muted: false,
    groupId: "57e1a52f515073048b1cb629"
    },
    {
    id: "57b58094cd7f5720353deda0",
    name: "玉蝴",
    isOwner: true,
    color: "#dd65ff",
    inAll: false,
    sortOrder: 2199023255552,
    sortType: "sortOrder",
    userCount: 1,
    etag: "2p81xreg",
    modifiedTime: "2017-03-07T13:37:18.309+0000",
    closed: true,
    muted: true,
    groupId: null
    },
    {
    id: "57b58407cd7f5720353deda1",
    name: "test1-4-6666",
    isOwner: true,
    color: "#00d5be",
    inAll: true,
    sortOrder: 25288767438848,
    sortType: "sortOrder",
    userCount: 1,
    etag: "0bkggirz",
    modifiedTime: "2017-12-07T08:35:24.849+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e04",
    name: "毕设",
    isOwner: true,
    color: "#FE8567",
    inAll: true,
    sortOrder: 0,
    sortType: "dueDate",
    userCount: 1,
    etag: "d2kr77ni",
    modifiedTime: "2017-12-07T08:35:24.017+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e05",
    name: "最美",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 0,
    sortType: "sortOrder",
    userCount: 1,
    etag: "525yqyp8",
    modifiedTime: "2017-04-04T17:42:52.337+0000",
    closed: true,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e39",
    name: "置办",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 0,
    sortType: "sortOrder",
    userCount: 1,
    etag: "bdlwamst",
    modifiedTime: "2017-04-04T17:45:01.268+0000",
    closed: true,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e64",
    name: "账户",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 1099511627776,
    sortType: "dueDate",
    userCount: 1,
    etag: "wyz94m0h",
    modifiedTime: "2017-12-07T08:35:24.082+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e66",
    name: "Git",
    isOwner: true,
    color: null,
    inAll: false,
    sortOrder: 2199023255552,
    sortType: "dueDate",
    userCount: 1,
    etag: "625cr1ax",
    modifiedTime: "2017-12-07T08:35:24.151+0000",
    closed: null,
    muted: true,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e6e",
    name: "资料",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 4398046511104,
    sortType: "sortOrder",
    userCount: 1,
    etag: "gz24fhep",
    modifiedTime: "2017-12-07T08:35:24.263+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e73",
    name: "chrome插件",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 5497558138880,
    sortType: "dueDate",
    userCount: 1,
    etag: "6fwafnpy",
    modifiedTime: "2017-12-07T08:35:24.297+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e7b",
    name: "Mac",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 6597069766656,
    sortType: "sortOrder",
    userCount: 1,
    etag: "587etyfa",
    modifiedTime: "2017-12-07T08:35:24.333+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95e8c",
    name: "test2",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 7696581394432,
    sortType: "sortOrder",
    userCount: 1,
    etag: "rn6i0ot9",
    modifiedTime: "2017-12-07T08:35:24.362+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95ea8",
    name: "一周菜谱",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 8796093022208,
    sortType: "sortOrder",
    userCount: 1,
    etag: "7s4l3yxf",
    modifiedTime: "2017-12-07T08:35:24.394+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95eae",
    name: "Read later",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 9895604649984,
    sortType: "sortOrder",
    userCount: 1,
    etag: "43reia6z",
    modifiedTime: "2017-12-07T08:35:24.429+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95eb0",
    name: "test-folder",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 10995116277760,
    sortType: "sortOrder",
    userCount: 1,
    etag: "7ca7johk",
    modifiedTime: "2017-12-07T08:35:24.471+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95ebe",
    name: "三端协同",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 12094627905536,
    sortType: "dueDate",
    userCount: 1,
    etag: "yntbrej3",
    modifiedTime: "2017-12-07T08:35:24.505+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95ec1",
    name: "当年计划",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 13194139533312,
    sortType: null,
    userCount: 1,
    etag: "10djk47y",
    modifiedTime: "2017-12-07T08:35:24.540+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95ec7",
    name: "每日bug",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 14293651161088,
    sortType: null,
    userCount: 1,
    etag: "54n8a7ai",
    modifiedTime: "2017-12-07T08:35:24.575+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95ecb",
    name: "第三方库aaa",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 15393162788864,
    sortType: "sortOrder",
    userCount: 1,
    etag: "8c1zxax5",
    modifiedTime: "2018-02-01T08:36:45.218+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95ecd",
    name: "vue",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 29686813949952,
    sortType: null,
    userCount: 1,
    etag: "6shyy6au",
    modifiedTime: "2017-12-07T08:35:24.946+0000",
    closed: null,
    muted: false,
    groupId: "5a28fd4b4b33e339012103b4"
    },
    {
    id: "581659cc77c8de9571d95ecf",
    name: "本周",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 23089744183296,
    sortType: null,
    userCount: 1,
    etag: "qk5u6n75",
    modifiedTime: "2017-12-07T08:35:24.779+0000",
    closed: null,
    muted: false,
    groupId: "5a28fd4b4b33e339012103b4"
    },
    {
    id: "581659cc77c8de9571d95ed1",
    name: "微信",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 17592186044416,
    sortType: null,
    userCount: 1,
    etag: "s0rydpoz",
    modifiedTime: "2017-12-07T08:35:24.639+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95efa",
    name: "web-pc",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 18691697672192,
    sortType: "sortOrder",
    userCount: 1,
    etag: "pqs0rmzn",
    modifiedTime: "2017-12-07T08:35:24.675+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95f01",
    name: "我的",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 19791209299968,
    sortType: "sortOrder",
    userCount: 1,
    etag: "etnaegfm",
    modifiedTime: "2017-12-07T08:35:24.712+0000",
    closed: null,
    muted: false,
    groupId: null
    },
    {
    id: "581659cc77c8de9571d95f04",
    name: "Inbox",
    isOwner: true,
    color: null,
    inAll: true,
    sortOrder: 20890720927744,
    sortType: "sortOrder",
    userCount: 1,
    etag: "oo0jnjwf",
    modifiedTime: "2017-12-07T08:35:24.747+0000",
    closed: null,
    muted: false,
    groupId: null
    }
]

function projectList(state = List(arrayToMap(ProjectCollection)), action) {
  switch (action.type) {
    case (types.ADD_LIST):
        return state.push(Map({
            id: action.id,
            title: action.text
        }));
    case (types.DELETE_LIST):
        const index = state.findIndex(project => {
          return project.get('id') === action.id
        })
        return state.delete(index)
    default:
        return state;
}
}

export default combineReducers({
  smartProjectList,
  projectList
})