import { templateController } from '../custom-attribute';
import { IRenderSlot } from '../render-slot';
import { IScope } from '../../binding/binding-context';
import { inject } from '../../../kernel/di';
import { IVisualFactory, IVisual } from '../visual';

@templateController('replaceable')
@inject(IVisualFactory, IRenderSlot)
export class Replaceable {
  private child: IVisual;

  constructor(private factory: IVisualFactory, private slot: IRenderSlot) {
    this.child = this.factory.create();
    this.slot.add(this.child);
  }

  bound(scope: IScope) {
    this.child.$bind(scope);
  }

  unbound() {
    this.child.$unbind();
  }
}
