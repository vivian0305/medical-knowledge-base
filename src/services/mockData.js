// 模拟医学数据
export const medicalData = {
  diseases: [
    {
      id: 'd1',
      title: '糖尿病',
      type: '疾病',
      category: '内分泌科',
      tags: ['内分泌科', '慢性病', '代谢性疾病'],
      description: '糖尿病是一组以高血糖为特征的代谢性疾病。高血糖则是由于胰岛素分泌缺陷或其生物作用受损，或两者兼有引起。',
      symptoms: ['多饮', '多食', '多尿', '体重下降'],
      treatments: ['饮食控制', '运动疗法', '药物治疗'],
      relatedDrugs: ['二甲双胍', '格列美脲', '胰岛素'],
      relatedTests: ['血糖检测', '糖化血红蛋白', '尿常规'],
    },
    {
      id: 'd2',
      title: '高血压',
      type: '疾病',
      category: '心血管科',
      tags: ['心血管科', '慢性病', '生活方式病'],
      description: '高血压是指血压持续高于正常范围的慢性疾病。长期高血压可导致心、脑、肾等器官损害。',
      symptoms: ['头痛', '头晕', '耳鸣', '心悸'],
      treatments: ['生活方式干预', '降压药物治疗'],
      relatedDrugs: ['氨氯地平', '缬沙坦', '氢氯噻嗪'],
      relatedTests: ['血压测量', '心电图', '肾功能检查'],
    },
    {
      id: 'd3',
      title: '肺炎',
      type: '疾病',
      category: '呼吸科',
      tags: ['呼吸科', '感染性疾病', '急性病'],
      description: '肺炎是指肺组织发生炎症的疾病，可由细菌、病毒、真菌等病原体引起。',
      symptoms: ['发热', '咳嗽', '咳痰', '胸痛'],
      treatments: ['抗感染治疗', '对症支持治疗'],
      relatedDrugs: ['阿莫西林', '头孢类', '布洛芬'],
      relatedTests: ['胸部X光', '血常规', '痰培养'],
    },
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
      sideEffects: ['胃肠道不适', '恶心', '腹泻'],
      contraindications: ['严重肾功能不全', '急性心力衰竭'],
      relatedDiseases: ['糖尿病', '代谢综合征'],
    },
    {
      id: 'dr2',
      title: '阿司匹林',
      type: '药品',
      category: '抗血小板药',
      tags: ['抗血小板药', '解热镇痛药', '口服'],
      description: '阿司匹林是一种非甾体抗炎药，具有抗炎、解热、镇痛和抗血小板聚集作用。',
      usage: '口服，每日1-2次',
      dosage: '预防剂量75-100mg/日',
      sideEffects: ['胃部不适', '出血风险增加'],
      contraindications: ['活动性消化性溃疡', '出血性疾病'],
      relatedDiseases: ['冠心病', '脑卒中', '关节炎'],
    },
    {
      id: 'dr3',
      title: '布洛芬',
      type: '药品',
      category: '解热镇痛药',
      tags: ['解热镇痛药', '非甾体抗炎药', '口服'],
      description: '布洛芬是一种非甾体抗炎药，用于缓解轻至中度疼痛和发热。',
      usage: '口服，每4-6小时一次',
      dosage: '成人每次200-400mg',
      sideEffects: ['胃部不适', '头晕', '皮疹'],
      contraindications: ['活动性消化性溃疡', '严重肝肾功能不全'],
      relatedDiseases: ['发热', '关节炎', '痛经'],
    },
  ],
  tests: [
    {
      id: 't1',
      title: '血常规',
      type: '检查',
      category: '检验科',
      tags: ['检验科', '生化检查', '常规检查'],
      description: '血常规是最基本的血液检查项目，包括红细胞、白细胞、血小板等指标的检测。',
      preparation: '空腹采血',
      normalRange: {
        '白细胞': '4.0-10.0×10^9/L',
        '红细胞': '3.5-5.5×10^12/L',
        '血红蛋白': '110-160g/L',
        '血小板': '100-300×10^9/L'
      },
      clinicalSignificance: '用于评估机体基本状况，筛查贫血、感染等疾病',
      relatedDiseases: ['贫血', '感染', '血液病'],
    },
    {
      id: 't2',
      title: '心电图',
      type: '检查',
      category: '心内科',
      tags: ['心内科', '功能检查', '无创检查'],
      description: '心电图是记录心脏电活动的检查方法，用于诊断心律失常、心肌缺血等心脏疾病。',
      preparation: '无需特殊准备',
      normalRange: '窦性心律，心率60-100次/分',
      clinicalSignificance: '用于诊断心律失常、心肌缺血、心肌梗死等心脏疾病',
      relatedDiseases: ['心律失常', '冠心病', '心肌病'],
    },
    {
      id: 't3',
      title: '胸部X光',
      type: '检查',
      category: '影像科',
      tags: ['影像科', '放射检查', '常规检查'],
      description: '胸部X光检查是评估肺部、心脏等胸部器官的基本影像学检查方法。',
      preparation: '无需特殊准备',
      normalRange: '肺野清晰，心影大小正常',
      clinicalSignificance: '用于诊断肺炎、肺结核、胸腔积液等疾病',
      relatedDiseases: ['肺炎', '肺结核', '胸腔积液'],
    },
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