export default {
  loginFace: '/ocn/getAccessToken',
  getUserInfo: '/ocn/user/getUserByToken',
  getJurisdiction: '/ocn/menu/getCurrentUserMenuPermsScm',
  // 根据区划编码翻译区划名
  getRegionName: '/api/common/getRegionName',

  // 获取菜单列表
  getMenu: '/api/common/getAppRouters',
  getMenuNew: '/ocn/menu/scmMenuTree',
  isHaveModule: '/system/api/server/application/count',
  getMyModule: '/system/api/server/application/my',
  editMyModule: '/system/api/server/application/operate',

  // 表单获取
  getFormData: '/api/common/getJsonFormByKey',
  // 获取三级联动
  getArea: '/api/common/getArea',
  // 证件号码检索校验人口类型与基础信息
  checkExistence: '/api/common/checkPopulationType',
  // 证件号码检索校验人口是否已在当前区划下绑定过房屋
  checkCardIsBound: '/api/dc/house/checkCardIsBound',
  // 身份证号码检索校验重点关爱是否唯一
  checkUniqueness: '/api/common/checkByCardMajorOrCare',
  // 获取所有数据字典数据
  getAllDict: '/api/common/getAllDict',
  getItemDict: '/api/common/getDictByStrArray',
  // 根据建筑地址获取建筑列表
  buildList: '/api/dc/build/listByAddress',
  houseList: '/api/dc/house/listByAddress',
  companyList: '/api/dc/company/info/listByAddress',
  // 上传附件
  uploadFile: '/sys/file/upload/url',
  // 事件上报附件上传
  eventUploadFile: '/es/file/upload',

  // 获取建筑列表
  getBuildingList: '/api/dc/build/page',
  // 删除指定id集合的建筑采集
  delBuilding: '/api/dc/build/delete',
  // 新增建筑采集
  addBuilding: '/api/dc/build/create',
  // 查看建筑采集
  watchBuilding: '/api/dc/build/getInfoById',
  // 编辑建筑采集
  editBuilding: '/api/dc/build/edit',


  // 获取指定建筑绑定的房屋列表
  getBindingHouse: '/api/dc/build/pageBindingHouse',
  // 获取指定建筑绑定的单位列表
  getBingingCompany: '/api/dc/build/pageBindingCompany',
  // 解绑房屋
  unBindHouse: "/api/dc/build/unbindHouse",
  // 解绑单位
  unbindCompany: "/api/dc/build/unbindCompany",


  // 获取房屋列表
  getHouseList: '/api/dc/house/page',
  // 删除指定房屋
  delHouse: '/api/dc/house/delete',
  // 新增编辑房屋信息
  addEditHouse: '/api/dc/house/operate',
  // 房屋详情
  watchHouse: '/api/dc/house/getInfoById',
  // 房屋承租人信息详情
  personDetail: '/api/dc/house/lease/getInfoByHouseId',
  // 获取指定房屋绑定的居住人口列表
  getLivePerson: '/api/dc/house/pageHousePopulation',
  // 房屋绑定居住人口
  bindingPerson: '/api/dc/house/bindPopulation',
  // 解绑房屋的居住人口
  unbundlingPerson: '/api/dc/house/unBindPopulation',
  // 获取房屋巡查列表
  getHouseVisitList: '/api/dc/house/interview/page',
  // 新增房屋巡查日志
  addHouseVisit: '/api/dc/house/interview/create',
  // 编辑房屋巡查日志
  editHouseVisit: '/api/dc/house/interview/edit',
  // 获取走访日期详情
  getHouseVisitDet: '/dc/house/interview/getInfoById',
  getHouseInfo: '/api/dc/house/getHouseInfoById',

  // 注销某条人口信息 card
  cancelPopulation: '/api/dc/population/base/cancel',
  // 注销某条人口信息(abroad) id 
  cancelAbroad: '/api/dc/abroad/cancel',
  // 获取人口走访列表
  getPopulationVisitList: '/api/dc/population/interview/page',
  // 新增人口走访日志
  addPopulationVisit: '/api/dc/population/interview/create',
  // 编辑人口走访日志
  editPopulationVisit: '/api/dc/population/interview/edit',
  // 获取走访日志详情
  getPopulationVisitDet: '/dc/population/interview/getInfoById',

  // 新增编辑单位采集
  addEditCompany: '/api/dc/company/info/operate',
  // 获取所有单位的信息列表
  getCompanyList: '/api/dc/company/info/page',
  // 单位详情
  detailCompany: '/api/dc/company/info/getInfoById',
  // 删除单位采集
  delCompany: '/api/dc/company/info/delete',

  // 获取户籍人口信息列表
  getRegistered: '/api/dc/population/register/page',
  // 删除某条人口信息
  delRegistered: '/api/dc/population/register/delete',
  // 查询用户是否存在业务关联（人口类删除前调用）
  bindRelationDel: '/api/dc/population/register/careMajorRelation',
  // 查询用户是否存在业务关联（人口类注销前调用）
  bindRelationCan: '/api/dc/population/register/bindRelation',
  // 设置某条人口信息常住状态
  isPermanent: '/api/dc/population/register/setAlwaysStay',
  // 新增&编辑户籍人口
  addRegistered: '/api/dc/population/register/operate',
  // 查询户籍人口详情
  getRegisteredItem: '/api/dc/population/register/getInfoById',

  // 获取流动人口信息列表
  getFlowList: '/api/dc/flow/list',
  // 删除某条流动人口信息
  delFlow: '/api/dc/flow/delete',
  // 查询用户是否存在业务关联
  bindRelationFlowDel: '/api/dc/flow/checkMajorCareByDelete',
  // 查询用户是否存在业务关联
  bindRelationFlowCan: '/api/dc/flow/checkMajorCareByCancel',
  // 修改流动人员常住状态
  isPermanentFlow: '/api/dc/flow/always',
  // 查看流动人口详情
  getFlowItem: '/api/dc/flow/getInfoById',
  // 新增流动人口信息
  addFlow: '/api/dc/flow/create',
  // 编辑流动人口信息
  editFlow: '/api/dc/flow/edit',

  // 境外人口信息列表
  getAbroadList: '/api/dc/abroad/list',
  // 删除某个境外人口信息
  delAbroad: '/api/dc/abroad/delete',
  // 修改境外人口常住状态
  isPermanentAbroad: '/api/dc/abroad/always',
  // 获取境外人口详情内容
  getAbroad: '/api/dc/abroad/getInfoById',
  // 新增境外人口信息
  addAbroad: '/api/dc/abroad/create',
  // 编辑境外人口信息
  editAbroad: '/api/dc/abroad/edit',

  // 获取独居老人列表
  getLivingAloneList: '/api/dc/care/livingAlone/list',
  // 删除某个独居老人信息
  delLivingAlone: '/api/dc/care/livingAlone/del',
  // 获取某个独居老人信息
  getLivingAloneDet: '/api/dc/care/livingAlone/detail',
  // 新增独居老人信息
  addLivingAlone: '/api/dc/care/livingAlone/create',
  // 编辑独居老人信息
  editLivingAlone: '/api/dc/care/livingAlone/edit',

  // 获取残疾人员列表
  getDisabledList: '/api/dc/care/disabled/list',
  // 删除某个残疾人员信息
  delDisabled: '/api/dc/care/disabled/del',
  // 获取残疾人员信息
  getDisabledDet: '/api/dc/care/disabled/detail',
  // 新增残疾人员信息
  addDisabled: '/api/dc/care/disabled/create',
  // 编辑残疾人员信息
  editDisabled: '/api/dc/care/disabled/edit',

  // 获取留守儿童列表
  getLeftBehindlist: '/api/dc/care/leftBehind/list',
  // 删除某条留守儿童信息
  delLeftBehind: '/api/dc/care/leftBehind/del',
  // 获取留守儿童信息
  getLeftBehindDet: '/api/dc/care/leftBehind/detail',
  // 新增留守儿童信息
  addLeftBehind: '/api/dc/care/leftBehind/create',
  // 编辑留守儿童信息
  editLeftBehind: '/api/dc/care/leftBehind/edit',

  // 获取失业人员列表
  getUnemployedList: '/api/dc/care/unemployed/list',
  // 删除某个失业人员
  delUnemployed: '/api/dc/care/unemployed/del',
  // 获取某个失业人员信息
  getUnemployedDet: '/api/dc/care/unemployed/detail',
  // 新增失业人员信息
  addUnemployed: '/api/dc/care/unemployed/create',
  // 编辑失业人员信息
  editUnemployed: '/api/dc/care/unemployed/edit',

  // 精神障碍患者列表
  getPsychopathList: '/api/dc/major/psychopath/list',
  // 删除某个精神障碍患者信息
  delPsychopath: '/api/dc/major/psychopath/del',
  // 获取精神障碍患者详情
  getPsychopathDet: '/api/dc/major/psychopath/detail',
  // 新增精神障碍患者信息
  addPsychopath: '/api/dc/major/psychopath/create',
  // 编辑精神障碍患者信息
  editPsychopath: '/api/dc/major/psychopath/edit',

  // 获取艾滋病人员列表
  getAidsList: '/api/dc/population/major/aids/page',
  // 删除某个艾滋病人员信息
  delAids: '/api/dc/population/major/aids/delete',
  // 获取艾滋病人员信息
  getAidsDet: '/api/dc/population/major/aids/getInfoById',
  // 新增艾滋病人员信息
  addAids: '/api/dc/population/major/aids/operate',
  // 编辑艾滋病人员信息
  editAids: '/api/dc/population/major/aids/operate',

  // 获取社区矫正人员列表
  getCorrectList: '/api/dc/population/major/correct/page',
  // 删除某个社区矫正人员信息
  delCorrect: '/api/dc/population/major/correct/delete',
  // 获取社区矫正人员信息
  getCorrectDet: '/api/dc/population/major/correct/getInfoById',
  // 新增社区矫正人员信息
  addCorrect: '/api/dc/population/major/correct/operate',
  // 编辑社区矫正人员信息
  editCorrect: '/api/dc/population/major/correct/operate',

  // 获取吸毒人员列表
  getDrugList: '/api/dc/major/drug/list',
  // 删除某个吸毒人员信息
  delDrug: '/api/dc/major/drug/del',
  // 获取吸毒人员信息
  getDrugDet: '/api/dc/major/drug/detail',
  // 新增吸毒人员信息
  addDrug: '/api/dc/major/drug/create',
  // 编辑吸毒人员信息
  editDrug: '/api/dc/major/drug/edit',

  // 获取刑满释放人员列表
  getReleaseList: '/api/dc/major/release/list',
  // 删除某个刑满释放人员
  delRelease: '/api/dc/major/release/del',
  // 获取刑满释放人员信息
  getReleaseDet: '/api/dc/major/release/detail',
  // 新增刑满释放人员信息
  addRelease: '/api/dc/major/release/create',
  // 编辑刑满释放人员信息
  editRelease: '/api/dc/major/release/edit',

  // 根据地区id获取地区名称
  getAreaNameById: '/api/common/getAreaDictByIds',

  // 获取事项类型树
  getEventTypes: '/es/matter/type/allTree',


  // 自办结事件提交
  eventHandleMyself: '/es/event/self/handleMyself',
  // 常规上报流程事件
  eventReport: '/api/es/event/flow/start',
  // 自办结核实提交操作提交
  eventVerifyReport: '/api/es/event/check',
  // 自办结核查结案操作提交
  eventCheckReport: '/es/event/self/handleMyselfExamine',
  // 非自办结事件处理提交
  eventCirculation: '/api/es/event/flow/circulation',

  // 获取提交的节点列表
  getReportNodes: '/api/es/event/flow/nodeList',
  // 获取已办结事件列表
  getCompletedEvents: '/es/event/multipleQuery/pageForHandleMyself',
  // 获取未办结事件列表
  getUnfinishedEvents: '/api/es/event/flow/apiPage',
  getFinishedEvents: '/api/es/event/flow/apiPageDone',
  // 获取待核实、待核查事件列表
  getVerificationEvents: '/es/event/multipleQuery/pageForGridVerification',

  // 获取事件详情
  getEventDetail: '/es/event/info/getInfoById',
  // 获取事件流转详情
  getProcessRecord: '/es/event/info/getProcessRecord',

  // 获取消息分类和分类消息统计量
  getClassification: '/msg/unreadCount',
  // 获取各分类内的消息列表
  getNotesList: '/msg/list',
  // 未读总数统计
  getUnreadCount: '/msg/unreadNumCount',
  // 检查最新版本
  checkVersion: '/common/getClientVersion',

  // 获取宏天token
  getHontianToken: '/es/event/flow/token',
  // 获取宏天表单
  getHontianForm: '/eipapi/form/formDef/v1/get',

  // 社会组织
  getSocialList: "/api/dc/social/organization/page",
  addSocial: "/api/dc/social/organization/create",
  editSocial: "/api/dc/social/organization/edit",
  watchSocial: "/api/dc/social/organization/getInfoById",
  delSocial: "/api/dc/social/organization/delete",
  
  
  // 非公有制
  getOrganList: "/api/dc/zz/NPSOE/organization/page",
  addOrgan: "/api/dc/zz/NPSOE/organization/create",
  editOrgan: "/api/dc/zz/NPSOE/organization/edit",
  watchOrgan: "/api/dc/zz/NPSOE/organization/getInfoById",
  delOrgan: "/api/dc/zz/NPSOE/organization/delete",


  // 事件审核
  getExamineList: "/es/wx/event/page",
  getDetail: "/es/wx/event/getById",
  wxAccept: "/es/wx/event/accept",
  //接口上传gps
  sendGps: '/gps/info/report',
  //融云接口
  rongyun: '/overview/rongCloud/getRongToken',
  
  // 通知公告
  noticeList: "/notice/page/receive",
  noticeDetail: "/notice/getById",
  confirmNotice: "/notice/confirm",
  
  // 防疫日志
  preventList: "/api/dc/epidemicGridLog/page",
  addPrevent: "/api/dc/epidemicGridLog/insert",
  
  // 统计-巡查时长
  patrolDuration: "/statistics/data/personal/patrolDuration",
  eventNum:"/statistics/event/quantity/count",
  personalEndEvent: "/statistics/data/personal/personalEndEvent",
  personalRanking: "/statistics/data/personal/personalRanking",
  gridTotal: "/api/statistics/data/grid/gridTotal",
  // 我的经办
  handleEvent: "/api/es/event/flow/apiPageHandle",
  
  // 网格日志
  gridLogList: "/api/dc/peopleGridLog/page",
  addGridLog: "/api/dc/peopleGridLog/insert"
  
}