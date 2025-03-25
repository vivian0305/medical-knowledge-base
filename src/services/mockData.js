// 模拟医学数据
export const medicalData = {
  diseases: [
    {
      id: 'd1',
      title: '糖尿病',
      type: '疾病',
      category: '内分泌科',
      department: '内分泌科',
      tags: ['内分泌科', '慢性病', '代谢性疾病'],
      description: '糖尿病是一组以高血糖为特征的代谢性疾病。高血糖则是由于胰岛素分泌缺陷或其生物作用受损，或两者兼有引起。',
      symptoms: ['多饮', '多食', '多尿', '体重下降', '疲乏', '视力模糊', '伤口愈合慢'],
      treatments: ['饮食控制', '运动疗法', '药物治疗', '胰岛素治疗', '血糖监测'],
      relatedDrugs: ['二甲双胍', '格列美脲', '阿卡波糖', '胰岛素'],
      relatedTests: ['空腹血糖', '糖化血红蛋白', '尿常规', '胰岛素水平测定'],
      severity: '中度',
      ageGroups: ['成年', '老年'],
      preventions: ['控制饮食', '规律运动', '定期体检', '戒烟限酒'],
      complications: ['糖尿病肾病', '糖尿病视网膜病变', '糖尿病神经病变'],
      prognosis: '可以通过良好的血糖控制和生活方式管理来预防并发症',
    },
    {
      id: 'd2',
      title: '高血压',
      type: '疾病',
      category: '心血管科',
      department: '心血管内科',
      tags: ['心血管科', '慢性病', '生活方式病'],
      description: '高血压是指血压持续高于正常范围的慢性疾病。长期高血压可导致心、脑、肾等器官损害。',
      symptoms: ['头痛', '头晕', '耳鸣', '心悸', '失眠', '疲劳', '视物模糊'],
      treatments: ['生活方式干预', '降压药物治疗', '定期监测血压', '并发症预防'],
      relatedDrugs: ['氨氯地平', '缬沙坦', '氢氯噻嗪', '美托洛尔'],
      relatedTests: ['血压测量', '心电图', '肾功能检查', '眼底检查'],
      severity: '中度',
      ageGroups: ['成年', '老年'],
      preventions: ['限盐饮食', '规律运动', '戒烟限酒', '保持心理平衡'],
      complications: ['冠心病', '心力衰竭', '脑卒中', '肾功能损害'],
      prognosis: '通过规范治疗和生活方式改善可以有效控制血压',
    },
    {
      id: 'd3',
      title: '肺炎',
      type: '疾病',
      category: '呼吸科',
      department: '呼吸内科',
      tags: ['呼吸科', '感染性疾病', '急性病'],
      description: '肺炎是指肺组织发生炎症的疾病，可由细菌、病毒、真菌等病原体引起。',
      symptoms: ['发热', '咳嗽', '咳痰', '胸痛', '气促', '呼吸困难', '乏力'],
      treatments: ['抗感染治疗', '对症支持治疗', '氧疗', '营养支持'],
      relatedDrugs: ['阿莫西林', '头孢类', '左氧氟沙星', '布洛芬'],
      relatedTests: ['胸部X光', '血常规', '痰培养', 'CT检查'],
      severity: '重度',
      ageGroups: ['儿童', '成年', '老年'],
      preventions: ['注意保暖', '勤洗手', '戒烟', '接种疫苗'],
      complications: ['胸腔积液', '呼吸衰竭', '脓胸'],
      prognosis: '及时治疗预后良好，重症需要住院治疗',
    },
    {
      id: 'd4',
      title: '胃炎',
      type: '疾病',
      category: '消化科',
      department: '消化内科',
      tags: ['消化科', '炎症', '常见病'],
      description: '胃炎是胃黏膜的炎症性疾病，可由多种因素引起，如幽门螺杆菌感染、应激、药物等。',
      symptoms: ['上腹痛', '恶心', '呕吐', '嗳气', '食欲不振', '烧心'],
      treatments: ['药物治疗', '饮食调理', '根除幽门螺杆菌', '生活方式改善'],
      relatedDrugs: ['奥美拉唑', '铝碳酸镁', '克拉霉素', '阿莫西林'],
      relatedTests: ['胃镜检查', '幽门螺杆菌检测', '血常规'],
      severity: '轻度',
      ageGroups: ['青少年', '成年', '老年'],
      preventions: ['规律饮食', '避免刺激性食物', '戒烟限酒'],
      complications: ['消化性溃疡', '胃出血', '胃癌'],
      prognosis: '大多数患者通过规范治疗可以控制症状',
    },
    {
      id: 'd5',
      title: '支气管哮喘',
      type: '疾病',
      category: '呼吸科',
      department: '呼吸内科',
      tags: ['呼吸科', '慢性病', '过敏性疾病'],
      description: '支气管哮喘是一种慢性气道炎症性疾病，特征是反复发作的喘息、气促、胸闷和咳嗽。',
      symptoms: ['喘息', '气促', '胸闷', '咳嗽', '夜间症状加重'],
      treatments: ['吸入性糖皮质激素', '支气管扩张剂', '免疫治疗', '避免过敏原'],
      relatedDrugs: ['布地奈德', '沙美特罗', '孟鲁司特', '特布他林'],
      relatedTests: ['肺功能检查', '支气管激发试验', '过敏原检测'],
      severity: '中度',
      ageGroups: ['儿童', '青少年', '成年'],
      preventions: ['避免接触过敏原', '保持室内通风', '规律运动'],
      complications: ['呼吸衰竭', '肺气肿', '支气管扩张'],
      prognosis: '通过规范治疗可以控制症状，提高生活质量',
    }
  ],
  drugs: [
    {
      id: 'dr1',
      title: '二甲双胍',
      type: '药品',
      category: '降糖药',
      tags: ['降糖药', '口服', '双胍类'],
      description: '二甲双胍是一种双胍类口服降糖药，主要用于治疗2型糖尿病。',
      usage: '口服，每日2-3次，随餐服用',
      dosage: '起始剂量500mg，最大剂量2550mg/日',
      sideEffects: ['胃肠道不适', '恶心', '腹泻', '维生素B12缺乏', '乳酸酸中毒'],
      contraindications: ['严重肾功能不全', '急性心力衰竭', '严重感染', '肝功能不全'],
      relatedDiseases: ['糖尿病', '代谢综合征', '多囊卵巢综合征'],
      interactions: ['含碘造影剂', '酒精', '某些降压药'],
      storage: '密封，常温保存',
      manufacturer: '正大天晴药业集团股份有限公司',
    },
    {
      id: 'dr2',
      title: '阿司匹林',
      type: '药品',
      category: '抗血小板药',
      tags: ['抗血小板药', '解热镇痛药', '口服'],
      description: '阿司匹林是一种非甾体抗炎药，具有抗炎、解热、镇痛和抗血小板聚集作用。',
      usage: '口服，每日1-2次',
      dosage: '预防剂量75-100mg/日，治疗剂量300-600mg/次',
      sideEffects: ['胃部不适', '出血风险增加', '过敏反应', '耳鸣'],
      contraindications: ['活动性消化性溃疡', '出血性疾病', '阿司匹林过敏'],
      relatedDiseases: ['冠心病', '脑卒中', '发热', '疼痛'],
      interactions: ['抗凝药', '其他非甾体抗炎药', '酒精'],
      storage: '密封，避光保存',
      manufacturer: '拜耳医药保健有限公司',
    },
    {
      id: 'dr3',
      title: '布洛芬',
      type: '药品',
      category: '解热镇痛药',
      tags: ['解热镇痛药', '非甾体抗炎药', '口服'],
      description: '布洛芬是一种非甾体抗炎药，用于缓解轻至中度疼痛和发热。',
      usage: '口服，每4-6小时一次',
      dosage: '成人每次200-400mg，每日最大剂量1200mg',
      sideEffects: ['胃部不适', '头晕', '皮疹', '肾功能损害'],
      contraindications: ['活动性消化性溃疡', '严重肝肾功能不全', '妊娠晚期'],
      relatedDiseases: ['发热', '关节炎', '痛经', '头痛'],
      interactions: ['阿司匹林', '华法林', '降压药'],
      storage: '密封，常温保存',
      manufacturer: '西安杨森制药有限公司',
    },
    {
      id: 'dr4',
      title: '奥美拉唑',
      type: '药品',
      category: '质子泵抑制剂',
      tags: ['抑酸药', '质子泵抑制剂', '口服'],
      description: '奥美拉唑是一种质子泵抑制剂，用于治疗胃酸相关性疾病。',
      usage: '口服，每日1-2次，空腹服用',
      dosage: '常规剂量20mg/次，每日1-2次',
      sideEffects: ['头痛', '腹泻', '维生素B12吸收减少', '骨折风险增加'],
      contraindications: ['对奥美拉唑过敏', '与克拉霉素合用需慎重'],
      relatedDiseases: ['胃食管反流病', '消化性溃疡', '幽门螺杆菌感染'],
      interactions: ['克拉霉素', '华法林', '地高辛'],
      storage: '密封，避光保存',
      manufacturer: '阿斯利康制药有限公司',
    },
    {
      id: 'dr5',
      title: '氨氯地平',
      type: '药品',
      category: '钙通道阻滞剂',
      tags: ['降压药', '钙拮抗剂', '口服'],
      description: '氨氯地平是一种钙通道阻滞剂，主要用于治疗高血压和冠心病。',
      usage: '口服，每日1次',
      dosage: '常规剂量2.5-10mg/日',
      sideEffects: ['头痛', '面部潮红', '踝部水肿', '心悸'],
      contraindications: ['对氨氯地平过敏', '严重低血压', '心源性休克'],
      relatedDiseases: ['高血压', '冠心病', '心绞痛'],
      interactions: ['其他降压药', '西咪替丁', '葡萄柚汁'],
      storage: '密封，避光保存',
      manufacturer: '辉瑞制药有限公司',
    }
  ],
  tests: [
    {
      id: 't1',
      title: '血常规',
      type: '检查',
      category: '检验科',
      tags: ['检验科', '生化检查', '常规检查'],
      description: '血常规是最基本的血液检查项目，包括红细胞、白细胞、血小板等指标的检测。',
      preparation: '空腹采血，避免剧烈运动',
      normalRange: {
        '白细胞': '4.0-10.0×10^9/L',
        '红细胞': '3.5-5.5×10^12/L',
        '血红蛋白': '110-160g/L',
        '血小板': '100-300×10^9/L',
        '中性粒细胞比例': '50-70%',
        '淋巴细胞比例': '20-40%'
      },
      clinicalSignificance: '用于评估机体基本状况，筛查贫血、感染等疾病',
      relatedDiseases: ['贫血', '感染', '血液病', '白血病'],
      sampleType: '静脉血',
      reportTime: '当天',
      precautions: '采血前禁食8小时，避免剧烈运动',
      department: '检验科',
    },
    {
      id: 't2',
      title: '心电图',
      type: '检查',
      category: '心内科',
      tags: ['心内科', '功能检查', '无创检查'],
      description: '心电图是记录心脏电活动的检查方法，用于诊断心律失常、心肌缺血等心脏疾病。',
      preparation: '检查前保持安静，避免剧烈运动',
      normalRange: '窦性心律，心率60-100次/分',
      clinicalSignificance: '用于诊断心律失常、心肌缺血、心肌梗死等心脏疾病',
      relatedDiseases: ['心律失常', '冠心病', '心肌病', '心力衰竭'],
      sampleType: '无创检查',
      reportTime: '即时',
      precautions: '检查时保持安静，避免活动',
      department: '心内科',
      equipment: '心电图机',
    },
    {
      id: 't3',
      title: '胸部X光',
      type: '检查',
      category: '影像科',
      tags: ['影像科', '放射检查', '常规检查'],
      description: '胸部X光检查是评估肺部、心脏等胸部器官的基本影像学检查方法。',
      preparation: '脱去金属饰品，穿轻薄衣物',
      normalRange: '肺野清晰，心影大小正常',
      clinicalSignificance: '用于诊断肺炎、肺结核、胸腔积液等疾病',
      relatedDiseases: ['肺炎', '肺结核', '胸腔积液', '心脏扩大'],
      sampleType: '影像学检查',
      reportTime: '当天',
      precautions: '孕妇慎做，需要防护',
      department: '影像科',
      equipment: 'X光机',
    },
    {
      id: 't4',
      title: '血糖检测',
      type: '检查',
      category: '检验科',
      tags: ['检验科', '生化检查', '即时检验'],
      description: '血糖检测是测定血液中葡萄糖浓度的检查，用于糖尿病的诊断和监测。',
      preparation: '空腹8小时以上（空腹血糖检测）',
      normalRange: {
        '空腹血糖': '3.9-6.1mmol/L',
        '餐后2小时血糖': '<7.8mmol/L',
        '随机血糖': '<11.1mmol/L'
      },
      clinicalSignificance: '用于糖尿病的诊断、监测和治疗效果评估',
      relatedDiseases: ['糖尿病', '低血糖', '糖耐量异常'],
      sampleType: '静脉血或指尖血',
      reportTime: '即时',
      precautions: '空腹检测需禁食8小时',
      department: '检验科',
    },
    {
      id: 't5',
      title: '肝功能检查',
      type: '检查',
      category: '检验科',
      tags: ['检验科', '生化检查', '常规检查'],
      description: '肝功能检查是评估肝脏功能的一组生化指标检测。',
      preparation: '空腹采血，避免剧烈运动',
      normalRange: {
        'ALT': '0-40U/L',
        'AST': '0-40U/L',
        '总胆红素': '5.1-19μmol/L',
        '白蛋白': '35-55g/L',
        '碱性磷酸酶': '40-150U/L'
      },
      clinicalSignificance: '用于肝病的诊断、病情监测和预后评估',
      relatedDiseases: ['肝炎', '肝硬化', '脂肪肝', '药物性肝损伤'],
      sampleType: '静脉血',
      reportTime: '当天',
      precautions: '避免饮酒和剧烈运动',
      department: '检验科',
    }
  ],
};

// 搜索函数
export const searchMedicalData = (query) => {
  const allData = [
    ...medicalData.diseases,
    ...medicalData.drugs,
    ...medicalData.tests
  ];

  const searchResults = allData.filter(item => {
    const searchText = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchText)) ||
      (item.symptoms && item.symptoms.some(symptom => symptom.toLowerCase().includes(searchText))) ||
      (item.treatments && item.treatments.some(treatment => treatment.toLowerCase().includes(searchText))) ||
      (item.relatedDrugs && item.relatedDrugs.some(drug => drug.toLowerCase().includes(searchText))) ||
      (item.relatedTests && item.relatedTests.some(test => test.toLowerCase().includes(searchText)))
    );
  });

  return searchResults.map(item => ({
    ...item,
    relevance: calculateRelevance(item, query)
  })).sort((a, b) => b.relevance - a.relevance);
};

// 计算相关度
const calculateRelevance = (item, query) => {
  const searchText = query.toLowerCase();
  let relevance = 0;

  // 标题匹配权重最高
  if (item.title.toLowerCase().includes(searchText)) {
    relevance += 0.4;
  }

  // 描述匹配次之
  if (item.description.toLowerCase().includes(searchText)) {
    relevance += 0.3;
  }

  // 标签匹配
  const tagMatches = item.tags.filter(tag => tag.toLowerCase().includes(searchText)).length;
  relevance += tagMatches * 0.1;

  // 症状匹配
  if (item.symptoms) {
    const symptomMatches = item.symptoms.filter(symptom => symptom.toLowerCase().includes(searchText)).length;
    relevance += symptomMatches * 0.05;
  }

  // 治疗方法匹配
  if (item.treatments) {
    const treatmentMatches = item.treatments.filter(treatment => treatment.toLowerCase().includes(searchText)).length;
    relevance += treatmentMatches * 0.05;
  }

  // 相关药物匹配
  if (item.relatedDrugs) {
    const drugMatches = item.relatedDrugs.filter(drug => drug.toLowerCase().includes(searchText)).length;
    relevance += drugMatches * 0.05;
  }

  // 相关检查匹配
  if (item.relatedTests) {
    const testMatches = item.relatedTests.filter(test => test.toLowerCase().includes(searchText)).length;
    relevance += testMatches * 0.05;
  }

  return Math.min(relevance, 1);
};

// 添加科室分类
export const departments = [
  {
    id: 1,
    name: '内科',
    subDepartments: ['呼吸内科', '消化内科', '心血管内科', '内分泌科']
  },
  {
    id: 2,
    name: '外科',
    subDepartments: ['普通外科', '骨科', '神经外科', '心胸外科']
  },
  {
    id: 3,
    name: '妇产科',
    subDepartments: ['妇科', '产科', '计划生育']
  },
  {
    id: 4,
    name: '儿科',
    subDepartments: ['新生儿科', '小儿内科', '小儿外科']
  },
  {
    id: 5,
    name: '五官科',
    subDepartments: ['耳鼻喉科', '眼科', '口腔科']
  }
];

// 添加常见症状
export const commonSymptoms = [
  '发热', '咳嗽', '头痛', '腹痛', '恶心', '呕吐', '腹泻', 
  '便秘', '胸痛', '气短', '浮肿', '关节痛', '头晕', '失眠'
];

// 高级搜索函数
export const advancedSearch = ({
  keyword = '',
  type = '',
  department = '',
  symptoms = [],
  ageGroup = '',
  severity = ''
}) => {
  let results = [];
  
  // 根据类型筛选
  switch(type) {
    case '疾病':
      results = medicalData.diseases;
      break;
    case '药品':
      results = medicalData.drugs;
      break;
    case '检查':
      results = medicalData.tests;
      break;
    default:
      results = [
        ...medicalData.diseases,
        ...medicalData.drugs,
        ...medicalData.tests
      ];
  }

  // 关键词过滤
  if (keyword) {
    results = results.filter(item => {
      return item.title.includes(keyword) ||
             item.description.includes(keyword) ||
             (item.tags && item.tags.some(tag => tag.includes(keyword)));
    });
  }

  // 科室过滤
  if (department) {
    results = results.filter(item => {
      return item.department === department ||
             (item.relatedDepartments && item.relatedDepartments.includes(department));
    });
  }

  // 症状过滤（仅适用于疾病）
  if (symptoms.length > 0 && type !== '药品' && type !== '检查') {
    results = results.filter(item => {
      return item.symptoms && symptoms.every(symptom => 
        item.symptoms.includes(symptom)
      );
    });
  }

  // 年龄组过滤
  if (ageGroup) {
    results = results.filter(item => {
      return item.ageGroups && item.ageGroups.includes(ageGroup);
    });
  }

  // 严重程度过滤
  if (severity) {
    results = results.filter(item => {
      return item.severity === severity;
    });
  }

  // 计算相关度
  results = results.map(item => {
    let relevance = 0;
    
    // 标题匹配
    if (item.title.includes(keyword)) relevance += 0.4;
    
    // 描述匹配
    if (item.description.includes(keyword)) relevance += 0.2;
    
    // 标签匹配
    if (item.tags && item.tags.some(tag => tag.includes(keyword))) relevance += 0.2;
    
    // 症状匹配（如果是疾病）
    if (item.symptoms && symptoms.length > 0) {
      const matchedSymptoms = symptoms.filter(s => item.symptoms.includes(s));
      relevance += (matchedSymptoms.length / symptoms.length) * 0.2;
    }

    return { ...item, relevance: Math.min(relevance, 1) };
  });

  // 按相关度排序
  return results.sort((a, b) => b.relevance - a.relevance);
};

// 获取相关推荐
export const getRelatedItems = (item, limit = 5) => {
  let relatedItems = [];
  
  switch(item.type) {
    case '疾病':
      // 相关药品
      relatedItems = [
        ...medicalData.drugs.filter(drug => 
          item.relatedDrugs && item.relatedDrugs.includes(drug.title)
        ),
        // 相关检查
        ...medicalData.tests.filter(test => 
          item.relatedTests && item.relatedTests.includes(test.title)
        )
      ];
      break;
      
    case '药品':
      // 相关疾病
      relatedItems = medicalData.diseases.filter(disease => 
        disease.relatedDrugs && disease.relatedDrugs.includes(item.title)
      );
      break;
      
    case '检查':
      // 相关疾病
      relatedItems = medicalData.diseases.filter(disease => 
        disease.relatedTests && disease.relatedTests.includes(item.title)
      );
      break;
  }
  
  return relatedItems.slice(0, limit);
}; 