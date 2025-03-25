import React, { useState } from 'react';
import { Layout, Input, AutoComplete, Card, Row, Col, Typography } from 'antd';
import { SearchOutlined, BookOutlined, MedicineBoxOutlined, FileSearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { searchMedicalData } from '../../services/mockData';

const { Header, Content } = Layout;
const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();
  const [searchOptions, setSearchOptions] = useState([]);

  // 处理搜索
  const handleSearch = (value) => {
    if (!value) {
      setSearchOptions([]);
      return;
    }

    const results = searchMedicalData(value);
    const options = results.map(item => ({
      value: item.title,
      label: `${item.type} - ${item.title}`,
      item: item
    }));
    
    setSearchOptions(options);
  };

  // 处理选择
  const handleSelect = (value, option) => {
    navigate('/search', { state: { searchResults: [option.item] } });
  };

  const categories = [
    {
      title: '疾病百科',
      icon: <BookOutlined className="category-icon" />,
      description: '常见疾病诊断、治疗方案',
    },
    {
      title: '药品手册',
      icon: <MedicineBoxOutlined className="category-icon" />,
      description: '药品说明、用法用量',
    },
    {
      title: '检查指南',
      icon: <FileSearchOutlined className="category-icon" />,
      description: '医学检查解读、注意事项',
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <Title level={3} style={{ margin: '20px 0', color: '#1890ff' }}>医学知识库</Title>
      </Header>
      <Content>
        <div className="search-container">
          <AutoComplete
            options={searchOptions}
            className="search-input"
            onSearch={handleSearch}
            onSelect={handleSelect}
          >
            <Input.Search
              size="large"
              placeholder="请输入疾病名称、症状、药品名称等..."
              enterButton
            />
          </AutoComplete>
        </div>
        
        <Row gutter={[16, 16]} justify="center">
          {categories.map((category, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                className="category-card"
              >
                {category.icon}
                <Title level={4}>{category.title}</Title>
                <p>{category.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Home; 