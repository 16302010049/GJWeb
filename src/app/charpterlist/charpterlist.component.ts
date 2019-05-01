import {Component, Input, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '第一章 拉布拉多',
    children: [
      {name: '第一节 nmsl'},
      {name: '第二节 wsnd'},
      {name: '第三节 hjyz'},
    ]
  }, {
    name: '第二章 哈士奇',
    children: [
      {name: '第一节 nmsl'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-charpterlist',
  templateUrl: './charpterlist.component.html',
  styleUrls: ['./charpterlist.component.css']
})
export class CharpterlistComponent implements OnInit {
  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  @Input() modified;
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
  }

}
