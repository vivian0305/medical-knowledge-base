import React, { useState } from 'react';
import { Layout, List, Card, Tag, Space, Typography, Input, Breadcrumb, Descriptions, Divider } from 'antd';
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchMedicalData } from '../../services/mockData';

const { Content } = Layout;
const { Title, Text } = Typography;

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(location.state?.searchResults || []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    if (!value) return;
    const results = searchMedicalData(value);
    setSearchResults(results);
    setSearchQuery(value);
  };

  const renderDetailContent = (item) => {
    switch (item.type) {
      case '疾病':
        return (
          <>
            <Descriptions title="基本信息" bordered>
              <Descriptions.Item label="分类">{item.category}</Descriptions.Item>
              <Descriptions.Item label="症状">
                {item.symptoms?.join('、')}
              </Descriptions.Item>
              <Descriptions.Item label="治疗方法">
                {item.treatments?.join('、')}
              </Descriptions.Item>
              <Descriptions.Item label="相关药物">
                {item.relatedDrugs?.join('、')}
              </Descriptions.Item>
              <Descriptions.Item label="相关检查">
                {item.relatedTests?.join('、')}
              </Descriptions.Item>
            </Descriptions>
          </>
        );
      case '药品':
        return (
          <>
            <Descriptions title="基本信息" bordered>
              <Descriptions.Item label="分类">{item.category}</Descriptions.Item>
              <Descriptions.Item label="用法用量">
                {item.usage}，{item.dosage}
              </Descriptions.Item>
              <Descriptions.Item label="不良反应">
                {item.sideEffects?.join('、')}
              </Descriptions.Item>
              <Descriptions.Item label="禁忌症">
                {item.contraindications?.join('、')}
              </Descriptions.Item>
              <Descriptions.Item label="相关疾病">
                {item.relatedDiseases?.join('、')}
              </Descriptions.Item>
            </Descriptions>
          </>
        );
      case '检查':
        return (
          <>
            <Descriptions title="基本信息" bordered>
              <Descriptions.Item label="分类">{item.category}</Descriptions.Item>
              <Descriptions.Item label="检查准备">
                {item.preparation}
              </Descriptions.Item>
              <Descriptions.Item label="正常参考值">
                {typeof item.normalRange === 'object' 
                  ? Object.entries(item.normalRange).map(([key, value]) => `${key}: ${value}`).join('；')
                  : item.normalRange}
              </Descriptions.Item>
              <Descriptions.Item label="临床意义">
                {item.clinicalSignificance}
              </Descriptions.Item>
              <Descriptions.Item label="相关疾病">
                {item.relatedDiseases?.join('、')}
              </Descriptions.Item>
            </Descriptions>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout className="layout">
      <Content>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>
            <Link to="/"><HomeOutlined /> 首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>搜索结果</Breadcrumb.Item>
        </Breadcrumb>

        <div className="search-results">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input.Search
              placeholder="搜索医学知识..."
              enterButton
              size="large"
              prefix={<SearchOutlined />}
              onSearch={handleSearch}
              className="search-input"
            />

            {searchQuery && (
              <Title level={4}>搜索关键词：{searchQuery}</Title>
            )}

            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={searchResults}
              renderItem={item => (
                <List.Item>
                  <Card className="result-card">
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Space className="tag-container">
                        <Title level={5}>{item.title}</Title>
                        <Tag color="blue">{item.type}</Tag>
                        {item.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </Space>
                      <Text className="description-text">{item.description}</Text>
                      <Text type="secondary">相关度：{(item.relevance * 100).toFixed(0)}%</Text>
                      <Divider />
                      {renderDetailContent(item)}
                    </Space>
                  </Card>
                </List.Item>
              )}
            />
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default SearchResults; 