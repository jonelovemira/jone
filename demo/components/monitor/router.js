import index from './index';
import cluster from './cluster/index';
import datacenter from './datacenter/index';
import welcome from './welcome/index';
import option from './option/index';
import option2 from './option/index2';




export default [
	{
	  name: 'monitor',
	  path: '/monitor',
	  component: index
	},
	{
	  name: 'cluster',
	  path: '/monitor/cluster',
	  component: cluster
	},
	 {
	  name: 'datacenter',
	  path: '/datacenter',
	  component: datacenter
	},{
	  name: 'welcome',
	  path: '/welcome',
	  component: welcome	
	},{
	  name: 'option1',
	  path: '/option1',
	  component: option	
	},{
	  name: 'option2',
	  path: '/option2',
	  component: option2
	}
];
